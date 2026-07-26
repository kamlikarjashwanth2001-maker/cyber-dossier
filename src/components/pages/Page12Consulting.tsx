import { motion } from "framer-motion";
import consultingImg from "@/assets/p13-consulting.jpg";

const PROCESS = [
  { n: "01", t: "ASSESS", d: "Comprehensive maturity modeling and gap analysis." },
  { n: "02", t: "STRATEGIZE", d: "Virtual CISO leadership and risk reporting." },
  { n: "03", t: "COMPLY", d: "Framework alignment for ISO 27001, SOC2, NIS2." },
  { n: "04", t: "GOVERN", d: "Building resilient security policies and programs." },
];

export function Page12Consulting({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden flex flex-col">
      {/* Full Bleed Cinematic Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img 
          src={consultingImg} 
          alt="Consulting" 
          className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity"
          animate={{ scale: [1.05, 1.15] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
        <div className="absolute inset-0 bp-grid-fine opacity-20" />
      </motion.div>

      {/* Top Header Bar */}
      <div className="w-full h-16 flex items-center justify-between px-8 md:px-16 z-20 relative">
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

      <div className="flex-1 w-full relative z-10 flex flex-col justify-end p-8 md:p-16 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mono text-cyan tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-cyan/50" />
              Strategic Advisory
            </div>
            <h2 className="display text-[clamp(4rem,8vw,8rem)] leading-[0.9] font-bold mb-8 text-white drop-shadow-2xl tracking-tight">
              Security<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-cyan">Consulting.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-paper/80 text-base md:text-lg leading-relaxed mb-20 max-w-2xl font-light"
          >
            Aligning cybersecurity with business objectives. Our strategic advisors translate complex technical risks into board-level imperatives and scalable governance programs.
          </motion.p>
        </div>

        {/* Cinematic Chapter Markers at the bottom */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-auto pt-8 border-t border-line/20">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + i * 0.15, duration: 0.8 }}
              className="group relative"
            >
              <motion.div 
                className="absolute -top-[33px] left-0 h-[2px] bg-cyan shadow-[0_0_10px_rgba(0,216,255,0.8)]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + i * 0.2, duration: 1.5, ease: "circOut" }}
              />
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="mono text-[10px] text-cyan/70 tracking-[0.3em]">PHASE {p.n}</div>
                </div>
                <div className="display text-xl font-medium tracking-wide text-white group-hover:text-cyan transition-colors">{p.t}</div>
                <div className="mono text-[9px] text-paper/50 leading-relaxed uppercase tracking-wider">{p.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
