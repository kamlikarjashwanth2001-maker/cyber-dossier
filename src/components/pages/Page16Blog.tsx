import { motion } from "framer-motion";
import p10Img from "@/assets/p10-closing.jpg";
import p8Img from "@/assets/p8-incident.jpg";
import p7Img from "@/assets/p7-forensics.jpg";

const ARTICLES = [
  {
    tag: "THREAT ANALYSIS",
    date: "July 4, 2026",
    readTime: "10 min read",
    title: "What Is BAT-BMS? The Battery App Behind Delhi's Viral E-Rickshaw Story Explained",
    img: p10Img,
  },
  {
    tag: "THREAT ANALYSIS",
    date: "July 2, 2026",
    readTime: "12 min read",
    title: "Chinese App Stopping EV Auto? Delhi Viral Story Explained (Truth, Risks & Safety Tips)",
    img: p8Img,
  },
  {
    tag: "THREAT ANALYSIS",
    date: "July 2, 2026",
    readTime: "12 min read",
    title: "What Is the Chinese App That Can Stop EV Autos? Everything We Know So Far",
    img: p7Img,
  },
];

export function Page16Blog({ goToIndex }: { goToIndex?: (i: number) => void }) {
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
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-cyan/30" />
            <div className="mono text-[10px] uppercase tracking-[0.35em] text-cyan border border-cyan/30 bg-cyan/5 px-4 py-1.5 rounded-full">
              DAILY CYBER UPDATES
            </div>
            <div className="h-px w-12 bg-cyan/30" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-paper tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Hacking, Bug Bounties & <span className="text-cyan">New Cyber Attacks</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-paper/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed italic"
          >
            "There are only two types of companies: those that have been hacked, and those that don't know it yet." <br className="hidden md:block" />
            <span className="text-cyan not-italic text-xs tracking-widest uppercase mono mt-4 inline-block">— John Chambers, Former Cisco CEO</span>
          </motion.p>
        </div>

        {/* Blog Section */}
        <div className="mb-6 flex items-baseline justify-between border-b border-line/30 pb-4">
          <h3 className="text-xl font-semibold text-paper">All Articles <span className="text-paper/40 text-sm font-normal">(15)</span></h3>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer flex flex-col h-full bg-void border border-line/20 hover:border-cyan/40 rounded-xl overflow-hidden transition-colors"
            >
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-line/20">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-void/90 backdrop-blur-md border border-cyan/40 px-3 py-1 rounded-full mono text-[8px] text-cyan uppercase tracking-widest">
                  {article.tag}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mono text-[10px] text-paper/50 uppercase tracking-widest mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-paper font-semibold text-lg leading-snug group-hover:text-cyan transition-colors line-clamp-3">
                  {article.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {goToIndex && (
          <div className="mt-16 mb-8 flex justify-center w-full border-t border-line/30 pt-10">
            <button onClick={() => goToIndex(2)} className="mono text-[10px] border border-cyan/30 bg-cyan/5 px-6 py-3 text-cyan hover:bg-cyan hover:text-void uppercase tracking-[0.2em] transition-colors flex items-center gap-3">
              ← Return to Directory
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
