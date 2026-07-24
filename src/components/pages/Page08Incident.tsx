import { motion } from "framer-motion";
import incident from "@/assets/p8-incident.jpg";

const PHASES = [
  { n: "01", t: "DETECT", d: "Signal to triage in under 5 minutes." },
  { n: "02", t: "CONTAIN", d: "Isolate hosts, disable tokens, break C2." },
  { n: "03", t: "ERADICATE", d: "Remove persistence; rotate secrets." },
  { n: "04", t: "RECOVER", d: "Restore trust; verified clean state." },
  { n: "05", t: "LEARN", d: "Post-mortem, controls, guardrails." },
];

export function Page08Incident() {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <motion.img
        src={incident}
        alt="Incident response war room"
        width={1920}
        height={1200}
        loading="lazy"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/50 to-transparent" />
      <div className="absolute inset-0 bp-grid opacity-30" />

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-12 p-8 md:p-14 gap-8">
        <div className="md:col-span-5 flex flex-col justify-between">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">08 — Response</div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="display text-[clamp(2.4rem,5.6vw,5.6rem)] leading-[0.95] font-semibold"
            >
              Incident<br />
              <span className="text-cyan">Response.</span>
            </motion.h2>
            <p className="mt-4 max-w-md text-paper/70 text-sm leading-relaxed">
              When the breach begins, minutes matter. Our operators take command — contain,
              eradicate, restore — with the coldness of a surgeon and the speed of a fire team.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "< 15m", l: "Mean Time to Contain" },
              { k: "24/7", l: "Retainer Coverage" },
              { k: "98%", l: "Recovery Success" },
            ].map((s) => (
              <div key={s.l} className="border border-cyan/30 p-3">
                <div className="display text-2xl text-cyan">{s.k}</div>
                <div className="mono text-[9px] text-paper/50 tracking-[0.2em] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="relative">
            {/* animated flow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
              <motion.line
                x1="40"
                y1="200"
                x2="760"
                y2="200"
                stroke="#00D8FF"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
            <div className="grid grid-cols-5 gap-3 relative">
              {PHASES.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="glass p-3 relative"
                >
                  <div className="absolute -top-2 left-2 mono text-[9px] text-cyan bg-void px-1">
                    {p.n}
                  </div>
                  <div className="display font-semibold tracking-wide text-sm mt-2">{p.t}</div>
                  <div className="mono text-[9px] text-paper/60 mt-2 leading-relaxed">{p.d}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 glass p-5">
            <div className="mono text-[10px] tracking-[0.3em] text-danger mb-3">◆ RETAINER SLA</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {[
                ["P1", "15 min"],
                ["P2", "1 hour"],
                ["P3", "4 hours"],
                ["Report", "72 hours"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="mono text-[10px] text-cyan tracking-[0.25em]">{k}</div>
                  <div className="text-paper">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
