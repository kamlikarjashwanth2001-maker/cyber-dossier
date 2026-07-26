import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cover from "@/assets/p1-eye.jpg";
import logoPlaceholder from "@/assets/logo.jpeg";
import introAudio from "@/assets/intro.mp3";

export function Page01Cover() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<"waiting" | "intro" | "ready">("waiting");

  const handleStart = () => {
    setStatus("intro");
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blocked by browser policy:", err);
      });
    }

    // Hide intro sequence after 4 seconds
    setTimeout(() => {
      setStatus("ready");
    }, 4000);
  };

  return (
    <div className="relative w-full h-full bg-void overflow-hidden">
      <audio ref={audioRef} src={introAudio} preload="auto" />

      {/* background image */}
      <motion.img
        src={cover}
        alt="Cyber intelligence eye"
        width={1600}
        height={1808}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={{ scale: 1, opacity: status === "ready" ? 0.6 : 0.1 }}
        transition={{ 
          scale: { duration: 30, ease: "easeOut" },
          opacity: { duration: 3 }
        }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none origin-[50%_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#010609] via-[#010609]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#010609] pointer-events-none" />
      <div className="absolute inset-0 bp-grid opacity-40 pointer-events-none" />

      <AnimatePresence mode="wait">
        {status === "waiting" && (
          <motion.div
            key="waiting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-void/90 backdrop-blur-xl"
          >
            {/* Cyber Scanning Line */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              className="absolute left-0 right-0 h-[2px] bg-cyan/40 shadow-[0_0_10px_rgba(0,216,255,0.8)] z-0 pointer-events-none opacity-50"
            />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-cyan/30 flex items-center justify-center mb-8 relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-t-2 border-cyan/60"
                />
                <div className="w-2 h-2 bg-cyan rounded-full animate-pulse shadow-[0_0_15px_rgba(0,216,255,1)]" />
              </div>

              <div className="flex flex-col items-center gap-2 mb-12 text-center">
                <div className="text-paper/70 text-[10px] md:text-xs mono uppercase tracking-[0.4em] leading-loose font-semibold">
                  Every system has a weakness.<br/>
                  Every attack leaves a trace.
                </div>
              </div>
              
              <button
                onClick={handleStart}
                className="group relative overflow-hidden border border-cyan/40 bg-cyan/5 px-12 py-5 text-cyan mono tracking-[0.4em] uppercase text-xs md:text-sm transition-all duration-700 hover:bg-cyan/20 hover:shadow-[0_0_40px_rgba(0,216,255,0.4)]"
              >
                <div className="absolute inset-0 w-0 bg-cyan/20 transition-all duration-700 ease-out group-hover:w-full" />
                <span className="relative z-10 font-bold drop-shadow-[0_0_10px_rgba(0,216,255,0.8)] group-hover:text-white transition-colors">
                  THE HUNT BEGINS HERE
                </span>
              </button>
            </div>
          </motion.div>
        )}

        {status === "intro" && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-void/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                scale: [0.95, 1, 1.1, 1.25] 
              }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center"
            >
              <motion.div 
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.6em" }}
                transition={{ delay: 0.3, duration: 2 }}
                className="text-white font-sans font-black text-3xl md:text-5xl tracking-widest uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                HITH
              </motion.div>
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.5, duration: 1 }}
                 className="mono text-cyan text-[9px] md:text-[10px] tracking-[0.5em] uppercase mt-6 opacity-80"
              >
                 Hackers In Threat Hunt
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {status === "ready" && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-10"
          >
            {/* Floating packets */}
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 bg-cyan rounded-full"
                style={{
                  left: `${(i * 53) % 100}%`,
                  top: `${(i * 31) % 100}%`,
                  boxShadow: "0 0 15px #00D8FF",
                }}
                animate={{
                  x: [0, 60, 0],
                  y: [0, -40, 0],
                  opacity: [0.1, 0.8, 0.1],
                }}
                transition={{ duration: 5 + (i % 6), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}

            {/* Cover masthead */}
            <div className="h-full flex flex-col justify-between p-8 md:p-16">
              <div className="flex items-start justify-between mono text-[10px] uppercase tracking-[0.35em] text-paper/60">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >
                  <div className="text-cyan font-bold tracking-[0.4em]">◈ HITH — VOLUME 01</div>
                  <div className="mt-2 text-paper/40 tracking-[0.2em]">Winter Edition · MMXXVI</div>
                </motion.div>
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1, duration: 1.5 }}
                   className="text-right"
                >
                  <div className="text-danger font-bold tracking-[0.4em]">// TOP SECRET</div>
                  <div className="mt-2 text-paper/40 tracking-[0.2em]">Distribution: Cleared Personnel</div>
                </motion.div>
              </div>

              <div className="max-w-5xl mt-auto mb-16">
                {["HUNT", "THREATS", "BEFORE THEY", "BECOME", "BREACHES"].map((word, i) => (
                  <motion.h1
                    key={word}
                    initial={{ y: 40, opacity: 0, scale: 0.98 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-sans font-black tracking-tighter leading-[0.88] text-[clamp(3.5rem,10vw,12rem)] ${
                      i === 2 ? "text-cyan drop-shadow-[0_0_30px_rgba(0,216,255,0.5)]" : "text-white drop-shadow-2xl"
                    }`}
                  >
                    {word}
                    {i === 4 && <span className="text-cyan drop-shadow-[0_0_30px_rgba(0,216,255,0.8)]">.</span>}
                  </motion.h1>
                ))}
                
                <div className="mt-12 mb-8 flex flex-col gap-3 border-l-2 border-cyan/40 pl-8">
                  {["Every system has a weakness.", "Every attack leaves a trace.", "The hunt begins here."].map((line, i) => (
                    <motion.p
                      key={line}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + i * 0.3, duration: 1 }}
                      className="text-paper/80 mono text-sm md:text-base tracking-[0.2em] uppercase font-semibold"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                  className="mt-8 flex flex-wrap gap-x-6 gap-y-2 mono text-[11px] uppercase tracking-[0.25em] text-paper/70"
                >
                  <span>Elite Threat Hunting</span>
                  <span className="text-cyan">·</span>
                  <span>Penetration Testing</span>
                  <span className="text-cyan">·</span>
                  <span>SOC Operations</span>
                  <span className="text-cyan">·</span>
                  <span>Incident Response</span>
                  <span className="text-cyan">·</span>
                  <span>AI-Powered Cyber Defense</span>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="flex items-end justify-between"
              >
                <div className="glass px-4 py-3 mono text-[10px] uppercase tracking-[0.25em] text-paper/70">
                  <div className="text-cyan">Field Report № 001</div>
                  <div className="text-paper/50 mt-1">The Modern Cyber Frontier</div>
                </div>
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/40 text-right">
                  <div>Turn to begin →</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
