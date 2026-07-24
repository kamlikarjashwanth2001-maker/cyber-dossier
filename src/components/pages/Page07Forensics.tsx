import { motion } from "framer-motion";
import forensics from "@/assets/p7-forensics.jpg";

const EVIDENCE = [
  { id: "E-001", t: "Malicious PDF", h: "sha256:9f2a..." },
  { id: "E-002", t: "Memory Dump", h: "lsass.dmp · 128MB" },
  { id: "E-003", t: "Registry Delta", h: "HKLM\\...\\Run" },
  { id: "E-004", t: "PCAP Capture", h: "22:14–22:47 UTC" },
];

const TIMELINE = [
  { time: "22:14", event: "Initial Access — phishing link" },
  { time: "22:31", event: "Execution — encoded PS payload" },
  { time: "22:47", event: "Discovery — AD enumeration" },
  { time: "23:12", event: "Lateral — SMB pivot to FS-01" },
  { time: "23:58", event: "Exfiltration — 4.2GB via TLS" },
];

export function Page07Forensics() {
  return (
    <div className="relative w-full h-full bg-ink overflow-hidden">
      <motion.img
        src={forensics}
        alt="Evidence board"
        width={1600}
        height={1800}
        loading="lazy"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />

      {/* red string overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {[
          "M 200 200 L 500 350 L 900 250 L 1000 550",
          "M 200 200 L 400 600 L 800 700",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#FF355E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 2.5, delay: 0.5 + i * 0.4 }}
          />
        ))}
      </svg>

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-12 gap-6 p-8 md:p-14">
        <div className="md:col-span-5 flex flex-col justify-between">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
            07 — Post-Mortem
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="display text-[clamp(2.4rem,5.6vw,5.6rem)] leading-[0.95] font-semibold"
            >
              Digital<br />
              <span className="text-outline">Forensics.</span>
            </motion.h2>
            <p className="mt-4 max-w-md text-paper/70 text-sm leading-relaxed">
              Every artifact is evidence. We reconstruct the crime scene from disk sectors,
              memory pages, and packet residue — pinned to the wall until the story is whole.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {EVIDENCE.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, rotate: -2, y: 20 }}
                animate={{ opacity: 1, rotate: i % 2 ? 1 : -1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="bg-paper text-void p-3 shadow-lg"
                style={{ boxShadow: "0 12px 30px -8px rgba(0,0,0,0.6)" }}
              >
                <div className="mono text-[9px] text-danger tracking-[0.25em]">{e.id}</div>
                <div className="display font-semibold text-sm mt-1">{e.t}</div>
                <div className="mono text-[9px] text-void/60 mt-1">{e.h}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-end">
          <div className="glass p-5">
            <div className="mono text-[10px] tracking-[0.3em] text-cyan mb-4">
              TIMELINE · RECONSTRUCTED
            </div>
            <ol className="relative border-l border-cyan/40 pl-6 space-y-4">
              {TIMELINE.map((t, i) => (
                <motion.li
                  key={t.time}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-cyan" />
                  <div className="mono text-[10px] text-cyan tracking-[0.25em]">{t.time} UTC</div>
                  <div className="text-paper/85 text-sm">{t.event}</div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
