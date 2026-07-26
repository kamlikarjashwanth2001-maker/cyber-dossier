import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPlaceholder from "@/assets/logo.png";
import introAudio from "@/assets/intro.mp3";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    setStarted(true);
    
    // Play audio
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed", err);
      });
    }

    // After animation finishes (e.g., 4 seconds), complete splash
    setTimeout(() => {
      onComplete();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-void flex items-center justify-center flex-col overflow-hidden">
      <audio ref={audioRef} src={introAudio} preload="auto" />

      <AnimatePresence>
        {!started ? (
          <motion.div
            key="start-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="mono text-cyan text-xs tracking-[0.2em] uppercase">Secure Connection Established</div>
            <button
              onClick={handleStart}
              className="border border-cyan/40 bg-cyan/10 hover:bg-cyan/20 px-8 py-3 text-cyan mono tracking-[0.3em] uppercase text-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,216,255,0.2)] hover:shadow-[0_0_25px_rgba(0,216,255,0.4)]"
            >
              INITIALIZE SYSTEM
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [0.95, 1, 1.05, 1.1] 
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div 
              className="w-32 h-32 md:w-48 md:h-48 relative mb-6"
              initial={{ filter: "drop-shadow(0 0 0px rgba(0,216,255,0))" }}
              animate={{ filter: "drop-shadow(0 0 40px rgba(0,216,255,0.6))" }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              {/* Note: This is a placeholder for the company logo */}
              <img 
                src={logoPlaceholder} 
                alt="Company Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if logo is missing
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="text-white display font-bold text-2xl md:text-4xl tracking-widest uppercase"
            >
              hackersinthreathunt
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5, duration: 1 }}
               className="mono text-cyan/70 text-[9px] mt-4 uppercase tracking-[0.4em]"
            >
              Cyber Intelligence Dossier
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
