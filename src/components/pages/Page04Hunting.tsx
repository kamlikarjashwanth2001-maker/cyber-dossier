import { motion } from "framer-motion";
import dossier from "@/assets/p4-dossier.jpg";

const PROCESS = [
  { n: "01", t: "HYPOTHESIS", d: "Formulate an adversary hypothesis grounded in ATT&CK TTPs." },
  { n: "02", t: "COLLECT", d: "Enrich endpoint, identity, cloud and network telemetry." },
  { n: "03", t: "HUNT", d: "Query, correlate, pivot. Question every anomaly." },
  { n: "04", t: "CONFIRM", d: "Validate scope; escalate to Incident Response." },
];

export function Page04Hunting({ goToIndex }: { goToIndex?: (i: number) => void }) {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2">
        <motion.img
          src={dossier}
          alt="Classified dossier open"
          width={1600}
          height={1800}
          loading="lazy"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="bg-panel bp-grid-fine relative">
          <div className="absolute top-6 right-6 mono text-[9px] tracking-[0.35em] text-danger">
            ◆ CLASSIFIED / EYES ONLY
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex items-end p-8 md:p-16">
          <div className="glass p-4 max-w-xs">
            <div className="mono text-[9px] text-cyan tracking-[0.35em]">EXHIBIT A</div>
            <div className="text-paper/80 text-sm mt-2">
              Open dossier: neural signature of a live intrusion, ATT&CK-mapped.
            </div>
            {goToIndex && (
              <button onClick={() => goToIndex(2)} className="mt-4 mono text-[10px] text-paper/50 hover:text-cyan uppercase tracking-[0.2em] transition-colors">
                ← Back to Directory
              </button>
            )}
          </div>
        </div>

        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
            04 — Discipline
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="display text-[clamp(2.4rem,5.6vw,5.6rem)] leading-[0.95] font-semibold mt-3"
          >
            Threat<br />
            <span className="text-cyan">Hunting.</span>
          </motion.h2>

          <p className="mt-4 max-w-md text-paper/70 text-sm leading-relaxed">
            We assume compromise. Then we prove it — or clear it. Every hunt is a scientific
            question against your telemetry.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="border border-line/60 bg-void/40 p-3"
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
            {["MITRE ATT&CK", "IOCs", "IOA", "Sigma", "YARA", "KQL / SPL", "OSQuery"].map((t) => (
              <span key={t} className="px-2 py-1 border border-cyan/30 text-cyan/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
