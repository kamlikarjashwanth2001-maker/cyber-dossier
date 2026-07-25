import { motion } from "framer-motion";
import p1Img from "@/assets/p1-eye.jpg";
import p2Img from "@/assets/p2-analysts.jpg";
import p3Img from "@/assets/p3-worldmap.jpg";
import p4Img from "@/assets/p4-dossier.jpg";
import p5Img from "@/assets/p5-pentest.jpg";
import p6Img from "@/assets/p6-soc.jpg";

export function Page15Gallery({ goToIndex }: { goToIndex?: (i: number) => void }) {
  const images = [p2Img, p6Img, p1Img, p5Img, p4Img, p3Img];

  return (
    <div className="relative w-full h-full bg-void overflow-y-auto custom-scrollbar pt-20 pb-16 px-8 md:px-12 xl:px-16">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center fixed">
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bp-grid opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-cyan/30" />
            <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan border border-cyan/30 bg-cyan/5 px-4 py-1.5 rounded-full">
              GALLERY
            </div>
            <div className="h-px w-12 bg-cyan/30" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-paper tracking-tight"
          >
            Life at <span className="text-cyan">HITH</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-paper/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into our engagements, teamwork, and daily operations.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden glass border border-line/30 group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div className="mono text-[9px] text-cyan tracking-[0.2em] uppercase">HITH Engagement {idx + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {goToIndex && (
          <div className="mt-16 mb-8 flex justify-center w-full">
            <button onClick={() => goToIndex(2)} className="mono text-[10px] border border-cyan/30 bg-cyan/5 px-6 py-3 text-cyan hover:bg-cyan hover:text-void uppercase tracking-[0.2em] transition-colors flex items-center gap-3">
              ← Return to Directory
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
