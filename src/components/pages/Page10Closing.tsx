import { motion } from "framer-motion";
import closing from "@/assets/p10-closing.jpg";

export function Page10Closing() {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <motion.img
        src={closing}
        alt="Closing spread"
        width={1920}
        height={1200}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-transparent" />

      <div className="relative z-10 h-full grid grid-rows-[auto_1fr_auto] p-8 md:p-16">
        <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
          10 — Closing
        </div>

        <div className="flex flex-col justify-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display text-[clamp(2.4rem,7vw,7rem)] leading-[0.92] font-semibold"
          >
            YOUR NEXT BREACH<br />
            <span className="text-outline">SHOULD NEVER</span><br />
            <span className="text-cyan">HAPPEN.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-xl text-paper/70 leading-relaxed"
          >
            Speak with our threat operations team. Request a confidential assessment of your
            attack surface, telemetry maturity, and response readiness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="mailto:ops@hackersinthreathunt.com"
              className="group relative px-8 py-4 bg-cyan text-void mono text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-cyan-2 transition-colors"
            >
              Request Assessment →
            </a>
            <a
              href="mailto:ops@hackersinthreathunt.com"
              className="px-8 py-4 border border-paper/30 text-paper mono text-[11px] uppercase tracking-[0.3em] hover:border-cyan hover:text-cyan transition-colors"
            >
              Contact Operations
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mono text-[10px] uppercase tracking-[0.25em] text-paper/60 border-t border-line pt-6">
          <div>
            <div className="text-cyan">Hackers In Threat Hunt</div>
            <div className="mt-1 text-paper/40">Elite cyber defense · MMXXVI</div>
          </div>
          <div>
            <div className="text-paper/80">Contact</div>
            <div className="mt-1 text-paper/50">ops@hackersinthreathunt.com</div>
          </div>
          <div>
            <div className="text-paper/80">Operations</div>
            <div className="mt-1 text-paper/50">Bengaluru · Singapore · London</div>
          </div>
          <div className="md:text-right">
            <div className="text-paper/80">◆ End of transmission</div>
            <div className="mt-1 text-paper/40">// FILE CLOSED</div>
          </div>
        </div>
      </div>
    </div>
  );
}
