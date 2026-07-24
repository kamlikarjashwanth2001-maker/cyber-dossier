import { motion } from "framer-motion";
import cover from "@/assets/p1-eye.jpg";

export function Page01Cover() {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      {/* background image */}
      <motion.img
        src={cover}
        alt="Cyber intelligence eye"
        width={1600}
        height={1808}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/40 to-void/80" />
      <div className="absolute inset-0 bp-grid opacity-40" />

      {/* Floating packets */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-cyan rounded-full"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 31) % 100}%`,
            boxShadow: "0 0 12px #00D8FF",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}

      {/* Cover masthead */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-16">
        <div className="flex items-start justify-between mono text-[10px] uppercase tracking-[0.35em] text-paper/60">
          <div>
            <div className="text-cyan">◈ HITH — VOLUME 01</div>
            <div className="mt-1 text-paper/40">Winter Edition · MMXXVI</div>
          </div>
          <div className="text-right">
            <div className="text-danger">// TOP SECRET</div>
            <div className="mt-1 text-paper/40">Distribution: Cleared Personnel</div>
          </div>
        </div>

        <div className="max-w-4xl">
          {["HUNT", "THREATS", "BEFORE THEY", "BECOME", "BREACHES"].map((word, i) => (
            <motion.h1
              key={word}
              initial={{ y: 80, opacity: 0, rotateX: -40 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.9, ease: [0.22, 0.9, 0.28, 1] }}
              className={`display font-bold leading-[0.88] text-[clamp(3rem,9vw,10rem)] ${
                i === 2 ? "text-outline" : "text-paper"
              }`}
            >
              {word}
              {i === 4 && <span className="text-cyan">.</span>}
            </motion.h1>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 mono text-[11px] uppercase tracking-[0.25em] text-paper/70"
          >
            <span>Elite Threat Hunting</span>
            <span className="text-cyan">·</span>
            <span>Penetration Testing</span>
            <span className="text-cyan">·</span>
            <span>SOC Operations</span>
            <span className="text-cyan">·</span>
            <span>Incident Response</span>
            <span className="text-cyan">·</span>
            <span>AI-Powered Cyber Defense</span>
          </motion.div>
        </div>

        <div className="flex items-end justify-between">
          <div className="glass px-4 py-3 mono text-[10px] uppercase tracking-[0.25em] text-paper/70">
            <div className="text-cyan">Field Report № 001</div>
            <div className="text-paper/50 mt-1">The Modern Cyber Frontier</div>
          </div>
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/40 text-right">
            <div>Turn to begin →</div>
          </div>
        </div>
      </div>
    </div>
  );
}
