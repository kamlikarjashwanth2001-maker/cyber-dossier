import { motion } from "framer-motion";
import worldmap from "@/assets/p3-worldmap.jpg";

const STATS = [
  { k: "2,317", l: "Live Attack Streams" },
  { k: "148", l: "Tracked APT Groups" },
  { k: "38%", l: "Cloud-Origin Attacks" },
  { k: "72s", l: "Median Dwell → Detect" },
];

const THREATS = [
  { n: "01", t: "APT GROUPS", d: "State-sponsored, patient, targeted." },
  { n: "02", t: "RANSOMWARE", d: "Double extortion, brokered access." },
  { n: "03", t: "CLOUD ATTACKS", d: "IAM abuse, misconfig, key theft." },
  { n: "04", t: "IDENTITY", d: "Session hijack, MFA fatigue, tokens." },
];

export function Page03Landscape() {
  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <motion.img
        src={worldmap}
        alt="Global threat map"
        width={1920}
        height={1200}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2 }}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-transparent to-void" />

      {/* Animated arcs */}
      <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        {[
          "M 200 620 Q 700 100 1200 500",
          "M 1500 300 Q 1000 700 300 800",
          "M 900 200 Q 1200 500 1700 700",
          "M 400 900 Q 900 400 1400 600",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={i % 2 ? "#FF355E" : "#00D8FF"}
            strokeWidth="1.4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 3.5, delay: i * 0.4, repeat: Infinity, repeatDelay: 2, repeatType: "loop" }}
          />
        ))}
      </svg>

      <div className="relative z-10 h-full grid grid-rows-[auto_1fr_auto] p-8 md:p-16">
        <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan">
          <div>03 — Field Study</div>
          <div className="text-paper/50 mt-1">The Modern Threat Landscape</div>
        </div>

        <div className="flex flex-col justify-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="display text-[clamp(2.4rem,6vw,6rem)] leading-[0.95] font-semibold"
          >
            A war of <span className="text-cyan">silence</span>,<br />
            fought at <span className="text-outline">machine speed.</span>
          </motion.h2>
          <p className="mt-6 max-w-xl text-paper/70 text-sm md:text-base leading-relaxed">
            Every second, adversaries pivot across identities, clouds, and continents. We map the
            traffic between shadows — the arcs above are drawn from live telemetry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass p-4"
            >
              <div className="display text-3xl md:text-4xl text-cyan">{s.k}</div>
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-paper/60 mt-2">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Threat cards floating right */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3 max-w-[280px]">
        {THREATS.map((t, i) => (
          <motion.div
            key={t.n}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="glass p-3 border-l-2 border-l-cyan"
          >
            <div className="flex items-baseline gap-3">
              <span className="mono text-[10px] text-cyan">{t.n}</span>
              <span className="display font-semibold tracking-wide">{t.t}</span>
            </div>
            <div className="mono text-[10px] text-paper/50 mt-1">{t.d}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
