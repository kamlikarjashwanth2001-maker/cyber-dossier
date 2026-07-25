import { motion } from "framer-motion";
import consultingImg from "@/assets/p13-consulting.jpg";

const PROCESS = [
  { n: "01", t: "ASSESS", d: "Comprehensive maturity modeling and gap analysis." },
  { n: "02", t: "STRATEGIZE", d: "Virtual CISO leadership and board-level risk reporting." },
  { n: "03", t: "COMPLY", d: "Framework alignment for ISO 27001, SOC2, and NIS2." },
  { n: "04", t: "GOVERN", d: "Building resilient security policies and vendor risk programs." },
];

export function Page12Consulting({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden flex flex-col">
      {/* Top Header Bar */}
      <div className="w-full h-16 border-b border-line/40 flex items-center justify-between px-8 md:px-16 bg-panel z-20">
        <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
          12 — Discipline
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 mono text-[9px] text-paper/40">
            <span>[ BOARD LEVEL BRIEFING ]</span>
            <span className="w-px h-3 bg-line/50" />
            <span>CONFIDENTIAL</span>
          </div>
          {goToIndex && (
             <button onClick={() => goToIndex(2)} className="mono text-[10px] text-cyan hover:text-white uppercase tracking-[0.2em] transition-colors">
               ← Directory
             </button>
          )}
        </div>
      </div>

      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 relative z-10">
        {/* Left Content Area */}
        <div className="col-span-1 md:col-span-6 lg:col-span-5 p-8 md:p-16 flex flex-col justify-center bg-void">
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="display text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[1.05] font-semibold mb-6"
          >
            Security<br />
            <span className="text-cyan">Consulting.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-paper/70 text-sm leading-relaxed mb-10 max-w-md"
          >
            Aligning cybersecurity with business objectives. Our strategic advisors translate complex technical risks into board-level imperatives and scalable governance programs.
          </motion.p>

          <div className="flex flex-col gap-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="group flex gap-4 items-start"
              >
                <div className="mono text-[10px] text-cyan border border-cyan/30 px-2 py-1 bg-cyan/5 group-hover:bg-cyan/20 transition-colors">
                  {p.n}
                </div>
                <div>
                  <div className="display font-semibold text-sm tracking-wide text-paper mb-1">{p.t}</div>
                  <div className="mono text-[9px] text-paper/50 leading-relaxed max-w-xs">{p.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Asymmetrical Image & Data Area */}
        <div className="hidden md:flex col-span-6 lg:col-span-7 bg-panel relative border-l border-line/40">
          <div className="absolute inset-0 bp-grid-fine opacity-30" />
          
          <div className="absolute inset-y-16 inset-x-8 lg:inset-x-16 grid grid-rows-[1fr_auto] gap-8">
            {/* Top Image Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full relative border border-line/50 p-2 bg-void"
            >
               <img src={consultingImg} alt="Strategic Dashboard" className="w-full h-full object-cover grayscale contrast-125 opacity-70" />
               <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            </motion.div>

            {/* Bottom Data Viz Box */}
            <div className="grid grid-cols-3 gap-4 h-32">
               {[
                 { label: "MATURITY SCORE", value: "84%", color: "text-cyan", border: "border-cyan/30" },
                 { label: "RISK EXPOSURE", value: "LOW", color: "text-paper", border: "border-line/40" },
                 { label: "COMPLIANCE", value: "ISO/SOC2", color: "text-paper", border: "border-line/40" },
               ].map((metric, i) => (
                 <motion.div 
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className={`border ${metric.border} bg-void/50 p-4 flex flex-col justify-center items-center text-center`}
                 >
                    <div className={`display text-2xl font-medium ${metric.color} mb-1`}>{metric.value}</div>
                    <div className="mono text-[8px] text-paper/40 tracking-[0.2em] uppercase">{metric.label}</div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
