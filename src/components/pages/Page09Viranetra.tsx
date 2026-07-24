import { motion } from "framer-motion";
import viranetra from "@/assets/p9-viranetra.jpg";

const PILLARS = [
  { t: "ENDPOINT", d: "Behavioral EDR telemetry" },
  { t: "IDENTITY", d: "Session graph analytics" },
  { t: "CLOUD", d: "IAM & workload posture" },
  { t: "NETWORK", d: "Flow + DNS anomaly" },
  { t: "THREAT INTEL", d: "Curated feeds + OSINT" },
  { t: "AI ENGINE", d: "Autonomous hypothesis" },
];

export function Page09Viranetra() {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-30" />

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-12 p-8 md:p-14 gap-8">
        <div className="md:col-span-5 flex flex-col justify-between">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
            09 — Platform Feature
          </div>

          <div>
            <div className="mono text-[10px] text-cyan tracking-[0.35em] mb-3">◈ VIRANETRA</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="display text-[clamp(2.6rem,6vw,6rem)] leading-[0.9] font-semibold"
            >
              One eye.<br />
              <span className="text-cyan">Every threat.</span>
            </motion.h2>
            <p className="mt-5 max-w-md text-paper/70 text-sm leading-relaxed">
              Viranetra unifies endpoint, identity, cloud and network telemetry into a single
              hunting surface — with an AI engine that never blinks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="border-l-2 border-cyan/60 pl-3 py-1"
              >
                <div className="mono text-[10px] text-cyan tracking-[0.25em]">{p.t}</div>
                <div className="text-[11px] text-paper/60">{p.d}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 relative flex items-center justify-center">
          <motion.img
            src={viranetra}
            alt="Viranetra 3D holographic dashboard"
            width={1600}
            height={1800}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 0.95, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="max-w-full max-h-full object-contain"
            style={{ filter: "drop-shadow(0 0 60px rgba(0,216,255,0.35))" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none opacity-30"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="180" fill="none" stroke="#00D8FF" strokeDasharray="2 6" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#00D8FF" strokeDasharray="1 4" />
            </svg>
          </motion.div>

          {/* corner metrics */}
          <div className="absolute top-4 right-4 glass p-3 mono text-[9px] tracking-[0.25em] text-paper/70">
            <div className="text-cyan">◉ AI CORE</div>
            <div className="mt-1">Status: NOMINAL</div>
            <div>Uptime: 99.997%</div>
          </div>
          <div className="absolute bottom-4 left-4 glass p-3 mono text-[9px] tracking-[0.25em] text-paper/70">
            <div className="text-cyan">TELEMETRY</div>
            <div className="mt-1">2.4B events / day</div>
          </div>
        </div>
      </div>
    </div>
  );
}
