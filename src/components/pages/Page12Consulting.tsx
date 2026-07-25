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
    <div className="relative w-full h-full bg-void overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block bg-panel bp-grid-fine relative">
          <div className="absolute top-6 left-6 mono text-[9px] tracking-[0.35em] text-cyan">
            ◆ ADVISORY SERVICES
          </div>
        </div>
        <motion.img
          src={consultingImg}
          alt="Security Consulting Framework"
          width={1600}
          height={1800}
          loading="lazy"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-8 md:p-16 flex flex-col justify-center bg-void/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
            12 — Discipline
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="display text-[clamp(2.4rem,5.6vw,5.6rem)] leading-[0.95] font-semibold mt-3"
          >
            Security<br />
            <span className="text-cyan">Consulting.</span>
          </motion.h2>

          <p className="mt-4 max-w-md text-paper/70 text-sm leading-relaxed">
            Aligning cybersecurity with business objectives. Our strategic advisors translate complex technical risks into board-level imperatives and scalable governance programs.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="border border-line/60 bg-void/60 md:bg-void/40 p-3 backdrop-blur-md"
              >
                <div className="flex items-baseline gap-2">
                  <span className="mono text-[9px] text-cyan">{p.n}</span>
                  <span className="display font-semibold text-sm tracking-wide">{p.t}</span>
                </div>
                <div className="mono text-[9px] text-paper/50 mt-1 leading-relaxed">{p.d}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 mono text-[9px] uppercase tracking-[0.3em] text-paper/60">
            {["vCISO", "ISO 27001", "SOC 2", "RISK MANAGEMENT", "COMPLIANCE", "BOARD REPORTING"].map((t) => (
              <span key={t} className="px-2 py-1 border border-cyan/30 text-cyan/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-end p-8 md:p-16 justify-end">
          <div className="glass p-4 max-w-xs text-right bg-void/50 backdrop-blur-md">
            <div className="mono text-[9px] text-cyan tracking-[0.35em]">EXHIBIT F</div>
            <div className="text-paper/80 text-sm mt-2">
              Executive risk quantification matrix and compliance roadmap.
            </div>
            {goToIndex && (
              <button onClick={() => goToIndex(2)} className="mt-4 mono text-[10px] text-paper/50 hover:text-cyan uppercase tracking-[0.2em] transition-colors">
                ← Back to Directory
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
