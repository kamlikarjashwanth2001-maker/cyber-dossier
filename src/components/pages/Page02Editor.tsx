import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portrait from "@/assets/p2-analysts.jpg";

const NOTE =
  "Our mission is to uncover hidden threats before attackers can cause damage. We hunt in the silence between alerts — in log entries no dashboard highlights, in behaviors no signature describes.";

export function Page02Editor() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setTyped(NOTE.slice(0, i));
      if (i >= NOTE.length) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full bg-ink overflow-hidden">
      <div className="absolute inset-0 bp-grid-fine opacity-60" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 h-full p-8 md:p-16">
        {/* Left column */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
            <div>03 — Editor's Note</div>
            <div className="text-paper/40 mt-1">From the Desk of the Chief Threat Analyst</div>
          </div>

          <div className="max-w-2xl">
            <div className="text-danger mono text-[10px] tracking-[0.35em] mb-6">
              ◆ FROM THE FIELD
            </div>
            <p className="display text-[clamp(1.8rem,3.6vw,3.4rem)] leading-[1.12] text-paper caret">
              "{typed}"
            </p>
            <div className="mt-8 mono text-[11px] uppercase tracking-[0.25em] text-paper/50">
              — A. Ravi, Chief Threat Analyst
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
            <div>
              <div className="text-cyan">Est.</div>
              <div className="text-paper/80 mt-1">2019 — Bengaluru</div>
            </div>
            <div>
              <div className="text-cyan">Team</div>
              <div className="text-paper/80 mt-1">42 Operators</div>
            </div>
            <div>
              <div className="text-cyan">Clearance</div>
              <div className="text-paper/80 mt-1">TS/SCI</div>
            </div>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative h-full glass overflow-hidden"
          >
            <img
              src={portrait}
              alt="Analysts silhouetted in the SOC"
              width={1400}
              height={1800}
              loading="lazy"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 scan-beam" />
            {/* annotations */}
            <Annotation top="12%" left="8%" text="SUBJECT A · LEAD HUNTER" delay={0.6} />
            <Annotation top="34%" left="62%" text="SUBJECT B · IR COMMANDER" delay={1.1} />
            <Annotation top="72%" left="14%" text="TERMINAL / MITRE ATT&CK" delay={1.6} />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between mono text-[9px] tracking-[0.3em] text-paper/50">
              <span>REF · IMG-0421.A</span>
              <span>03:14:22 UTC</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Annotation({
  top,
  left,
  text,
  delay,
}: {
  top: string;
  left: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="absolute mono text-[9px] tracking-[0.3em] text-cyan uppercase"
      style={{ top, left }}
    >
      <div className="flex items-center gap-2">
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-cyan ping-ring" />
          <span className="relative rounded-full bg-cyan w-2 h-2" />
        </span>
        <span className="border border-cyan/40 bg-void/70 px-2 py-1">{text}</span>
      </div>
    </motion.div>
  );
}
