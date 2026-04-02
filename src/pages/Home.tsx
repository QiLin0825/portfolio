import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Github } from 'lucide-react';

// Custom Douyin Icon (since Lucide doesn't have it)
const DouyinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full"
    >
      {/* Left Content (2/3) */}
      <div className="lg:col-span-2 space-y-8 pr-0 lg:pr-12">
        <h1 className="font-black tracking-tighter flex flex-col gap-2 md:gap-4">
          <span className="text-6xl md:text-8xl leading-none">
            我叫<span className="text-blue-600">朱麒霖</span>
          </span>
          <span className="text-4xl md:text-6xl text-gray-800 leading-none">
            一名24届<span className="text-yellow-400">金融生</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl">
          欢迎来到我的数字花园。这里记录了我的学业历程、技能成长、兴趣爱好以及对生活的感悟。
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.button
            onClick={() => scrollToSection('education')}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white border-4 border-black rounded-2xl font-bold text-lg flex items-center gap-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            了解更多 <ArrowRight size={20} />
          </motion.button>
        </div>

        <div className="flex items-center gap-6 pt-4">
          <motion.a
            href="https://github.com/QiLin0825"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.2 }}
            className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-colors"
            title="GitHub"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://v.douyin.com/NRByHGYk2DQ/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.2 }}
            className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-red-400 transition-colors"
            title="抖音"
          >
            <DouyinIcon size={24} />
          </motion.a>
          <motion.a
            href="mailto:loffierdebelakwq8323@gmail.com"
            whileHover={{ y: -5, scale: 1.2 }}
            className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-400 transition-colors"
            title="邮箱"
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </div>

      {/* Right Image (1/3) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative lg:col-span-1"
      >
        {/* Main Photo Frame */}
        <div className="w-full aspect-[3/4] bg-white border-4 border-black rounded-3xl shadow-[20px_20px_0px_0px_rgba(250,204,21,1),20px_20px_0px_4px_rgba(0,0,0,1)] p-4 relative group transition-transform hover:-translate-y-2">
          <div className="w-full h-full border-4 border-black rounded-xl overflow-hidden relative bg-gray-100">
            <img 
              src="/profile.jpg" 
              alt="朱麒霖" 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image is not yet uploaded
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/zhukilin/600/800";
              }}
            />
          </div>

          {/* "Sticker" Label */}
          <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-blue-600 text-white border-4 border-black rounded-xl font-black rotate-[-5deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            HELLO!
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-12 -right-8 w-24 h-24 bg-pink-400 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center z-10"
        >
          <span className="text-4xl">✨</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
