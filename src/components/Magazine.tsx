import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { pages } from "./pages/registry";

export function Magazine() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 1]);
  const total = pages.length;
  const lockRef = useRef(false);
  const wheelAcc = useRef(0);

  const go = useCallback(
    (delta: number) => {
      if (lockRef.current) return;
      const next = Math.max(0, Math.min(total - 1, index + delta));
      if (next === index) return;
      lockRef.current = true;
      setIndex([next, delta]);
      window.setTimeout(() => (lockRef.current = false), 950);
    },
    [index, total],
  );

  // Wheel + trackpad horizontal
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      wheelAcc.current += d;
      if (Math.abs(wheelAcc.current) > 40) {
        go(wheelAcc.current > 0 ? 1 : -1);
        wheelAcc.current = 0;
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") go(1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
      if (e.key === "Home") setIndex([0, -1]);
      if (e.key === "End") setIndex([total - 1, 1]);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [go, total]);

  // Mouse-reactive lighting
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const lightX = useTransform(mx, (v) => `${v * 100}%`);
  const lightY = useTransform(my, (v) => `${v * 100}%`);

  const Page = pages[index].component;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-void text-paper no-select">
      {/* Ambient lighting */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: useTransform(
            [lightX, lightY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x} ${y}, rgba(0,216,255,0.10), transparent 60%)`,
          ),
        }}
      />

      {/* Header operator bar */}
      <HeaderBar index={index} total={total} />

      {/* Page stage with 3D perspective */}
      <div
        className="absolute inset-0 z-[5]"
        style={{ perspective: "2400px", perspectiveOrigin: "50% 50%" }}
      >
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            initial={(d: number) => ({
              rotateY: d > 0 ? 82 : -82,
              x: d > 0 ? "40%" : "-40%",
              opacity: 0,
              filter: "brightness(0.4)",
            })}
            animate={{
              rotateY: 0,
              x: 0,
              opacity: 1,
              filter: "brightness(1)",
              transition: { duration: 0.85, ease: [0.22, 0.9, 0.28, 1] },
            }}
            exit={(d: number) => ({
              rotateY: d > 0 ? -82 : 82,
              x: d > 0 ? "-40%" : "40%",
              opacity: 0,
              filter: "brightness(0.3)",
              transition: { duration: 0.85, ease: [0.7, 0, 0.3, 1] },
            })}
            className="absolute inset-0 origin-center paper-shadow"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -120 || info.velocity.x < -400) go(1);
              else if (info.offset.x > 120 || info.velocity.x > 400) go(-1);
            }}
          >
            <div className="relative w-full h-full overflow-hidden bg-void grain scanlines vignette">
              <Page />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav */}
      <FooterNav index={index} total={total} onGo={(i) => setIndex([i, i > index ? 1 : -1])} />
    </div>
  );
}

function HeaderBar({ index, total }: { index: number; total: number }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-5 mono text-[10px] uppercase tracking-[0.3em] text-paper/60">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-danger pulse-dot" />
        <span>CLASSIFIED // TS-SCI</span>
        <span className="hidden md:inline text-paper/30">/ CH.{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <span>HACKERS·IN·THREAT·HUNT</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-paper/40">{pages[index].title}</span>
        <span className="text-paper/30">
          {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function FooterNav({
  index,
  total,
  onGo,
}: {
  index: number;
  total: number;
  onGo: (i: number) => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-6 md:px-10 py-5">
      <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
        <div>Scroll · Drag · ← →</div>
        <div className="text-paper/30 mt-1">Turn the page</div>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGo(i)}
            className="group h-6 flex items-end"
            aria-label={`Go to page ${i + 1}`}
          >
            <span
              className={`block w-6 md:w-8 h-[2px] transition-all duration-500 ${
                i === index ? "bg-cyan h-[3px]" : "bg-paper/20 group-hover:bg-paper/50"
              }`}
            />
          </button>
        ))}
      </div>
      <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/50 text-right">
        <div>Vol.01 / 2026</div>
        <div className="text-paper/30 mt-1">Viranetra Editorial</div>
      </div>
    </div>
  );
}
