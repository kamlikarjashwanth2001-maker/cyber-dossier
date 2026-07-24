import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import soc from "@/assets/p6-soc.jpg";

const ALERTS = [
  { t: "T1078", l: "Valid Accounts — anomalous geo", s: "HIGH" },
  { t: "T1059.001", l: "PowerShell — encoded cmd", s: "CRIT" },
  { t: "T1486", l: "Data Encrypted for Impact", s: "CRIT" },
  { t: "T1566", l: "Phishing — attachment", s: "MED" },
  { t: "T1055", l: "Process Injection", s: "HIGH" },
  { t: "T1071", l: "App Layer Protocol C2", s: "HIGH" },
];

export function Page06SOC() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <motion.img
        src={soc}
        alt="SOC operations room"
        width={1920}
        height={1200}
        loading="lazy"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-void/60" />
      <div className="absolute inset-0 bp-grid-fine opacity-40" />

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_1fr] gap-4 p-6 md:p-10">
        <div className="md:col-span-12 flex items-center justify-between">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
            06 — <span className="text-paper/60">Security Operations Center</span>
          </div>
          <div className="flex items-center gap-4 mono text-[10px] tracking-[0.3em] text-paper/60">
            <span className="text-cyan">● LIVE</span>
            <span>SHIFT 03 · 04:{String((10 + tick) % 60).padStart(2, "0")}:{String((tick * 7) % 60).padStart(2, "0")} UTC</span>
          </div>
        </div>

        {/* World / hero panel */}
        <div className="md:col-span-8 glass p-5 relative overflow-hidden">
          <div className="mono text-[10px] tracking-[0.3em] text-paper/60 mb-3">
            GLOBAL EVENT STREAM
          </div>
          <svg viewBox="0 0 800 260" className="w-full h-56">
            {Array.from({ length: 50 }).map((_, i) => {
              const h = 30 + ((i * 37 + tick * 11) % 180);
              return (
                <motion.rect
                  key={i}
                  x={i * 16}
                  y={260 - h}
                  width="10"
                  height={h}
                  fill={i % 7 === 0 ? "#FF355E" : "#00D8FF"}
                  opacity={0.7}
                  animate={{ height: h }}
                  transition={{ duration: 0.6 }}
                />
              );
            })}
          </svg>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              { k: "18,204", l: "EVENTS / MIN" },
              { k: "312", l: "DETECTIONS" },
              { k: "47", l: "TRIAGE QUEUE" },
              { k: "6", l: "ACTIVE INCIDENTS" },
            ].map((s) => (
              <div key={s.l} className="border border-line/60 p-2">
                <div className="display text-xl text-cyan">{s.k}</div>
                <div className="mono text-[9px] text-paper/50 tracking-[0.2em] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert feed */}
        <div className="md:col-span-4 glass p-4 flex flex-col">
          <div className="mono text-[10px] tracking-[0.3em] text-paper/60 mb-3">
            LIVE DETECTIONS
          </div>
          <div className="flex flex-col gap-2 overflow-hidden">
            {ALERTS.map((a, i) => (
              <motion.div
                key={a.t}
                animate={{ x: [8, 0], opacity: [0, 1] }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex items-center justify-between border-l-2 px-3 py-2 bg-void/40"
                style={{
                  borderColor: a.s === "CRIT" ? "#FF355E" : a.s === "HIGH" ? "#00D8FF" : "#2AE8FF",
                }}
              >
                <div>
                  <div className="mono text-[10px] text-paper">{a.t}</div>
                  <div className="text-[10px] text-paper/60">{a.l}</div>
                </div>
                <span
                  className="mono text-[9px] tracking-[0.2em]"
                  style={{ color: a.s === "CRIT" ? "#FF355E" : "#00D8FF" }}
                >
                  {a.s}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-auto pt-3 mono text-[9px] text-paper/40 tracking-[0.3em]">
            ↻ Auto-refresh 30s
          </div>
        </div>
      </div>
    </div>
  );
}
