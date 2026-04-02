import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Music, Calculator, Database, Terminal, Award, Users, Star } from 'lucide-react';

const allSkills = [
  { 
    name: "初级会计", 
    experience: "2026年取得初级会计职称证书，掌握基础会计准则与实务操作。",
    icon: <Award size={18} />,
    color: "bg-blue-50"
  },
  { 
    name: "金融分析", 
    experience: "熟练运用金融模型进行市场趋势分析，具备扎实的财务报表解读能力。",
    icon: <Star size={18} />,
    color: "bg-blue-50"
  },
  { 
    name: "Python & Pandas", 
    experience: "熟练进行大规模数据清洗、整合与可视化分析，提升决策效率。",
    icon: <Database size={18} />,
    color: "bg-green-50"
  },
  { 
    name: "AI Agent 技能栈", 
    experience: "熟练掌握 Prompt Engineering 等 Agent 开发技能，深度理解 MCP、RAG 等 Agent 相关核心概念与架构设计。",
    icon: <Sparkles size={18} />,
    color: "bg-purple-50"
  }
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-16"
    >
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          我的 <span className="text-pink-600">技能</span>
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          不仅是工具，更是我探索世界的触角
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Featured Skill: AI Agent - Large Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-8 p-10 border-4 border-black rounded-[48px] bg-purple-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 border-l-4 border-b-4 border-black -mr-16 -mt-16 rotate-45 opacity-30" />
          <div className="flex items-center gap-4 relative">
            <div className="p-4 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="text-purple-600" size={32} />
            </div>
            <h3 className="text-4xl font-black">AI Agent 技能栈</h3>
          </div>
          <p className="text-xl font-bold text-gray-800 leading-relaxed relative max-w-2xl">
            熟练掌握 Prompt Engineering 等 Agent 开发技能，深度理解 MCP、RAG 等核心概念与架构设计。致力于将 AI 能力转化为实际的业务生产力。
          </p>
          <div className="flex flex-wrap gap-3 relative">
            {["Prompt Engineering", "MCP", "RAG", "Agent Architecture"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white border-2 border-black rounded-full font-black text-sm uppercase">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Python & Data - Vertical Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-4 p-10 border-4 border-black rounded-[48px] bg-green-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="p-4 bg-white border-2 border-black rounded-2xl w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Database className="text-green-600" size={32} />
            </div>
            <h3 className="text-3xl font-black">数据分析</h3>
            <p className="font-bold text-gray-700 leading-relaxed">
              熟练使用 Python & Pandas 进行大规模数据清洗、整合与可视化分析，提升决策效率。
            </p>
          </div>
          <div className="pt-6 border-t-2 border-black/10 mt-6">
            <div className="text-xs font-black uppercase text-green-700">Stack: Python / Pandas / Matplotlib</div>
          </div>
        </motion.div>

        {/* Finance & Accounting - Two Cards */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-6 p-10 border-4 border-black rounded-[48px] bg-blue-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Award className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-black">初级会计</h3>
          </div>
          <p className="font-bold text-gray-700">
            2026年取得初级会计职称证书，掌握基础会计准则与实务操作，具备严谨的财务逻辑。
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-6 p-10 border-4 border-black rounded-[48px] bg-blue-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Star className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-black">金融分析</h3>
          </div>
          <p className="font-bold text-gray-700">
            熟练运用金融模型进行市场趋势分析，具备扎实的财务报表解读能力，洞察数据背后的商业价值。
          </p>
        </motion.div>

        {/* Soft Skills - Full Width */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="md:col-span-12 bg-black text-white border-4 border-black rounded-[56px] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]"
        >
          <h3 className="text-4xl font-black mb-12 text-center uppercase tracking-tighter text-yellow-400 italic">
            Soft Skills & Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "快速学习", desc: "对新技术保持好奇心，能够迅速上手并应用。" },
              { title: "团队协作", desc: "善于沟通，乐于分享，相信团队的力量。" },
              { title: "解决问题", desc: "面对挑战时保持冷静，寻找最优雅的解决方案。" },
              { title: "注重承诺", desc: "言出必行，对交付结果和承诺负责。" }
            ].map((item, i) => (
              <div key={i} className="space-y-3 relative group">
                <div className="absolute -left-4 top-0 w-1 h-full bg-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <h4 className="text-2xl font-black uppercase tracking-tight tracking-tighter"># {item.title}</h4>
                <p className="text-gray-400 font-bold leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
