import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Activity, Play, Target, Sparkles } from 'lucide-react';

const lifeData = [
  {
    title: "正在学习",
    icon: <BookOpen className="text-blue-600" />,
    content: "Agent 开发结合审计，学习编程语言架构，练习英语口语/英语思维，学习理财。",
    color: "bg-blue-50"
  },
  {
    title: "正在做的事",
    icon: <Activity className="text-green-600" />,
    content: "专注于个人能力的跨界融合，在技术与专业领域寻找平衡点，探索 AI 与审计的结合。",
    color: "bg-green-50"
  },
  {
    title: "正在看/读",
    icon: <Play className="text-purple-600" />,
    content: "暂无在读内容，目前专注于实践与技能内化。",
    color: "bg-purple-50"
  },
  {
    title: "短期目标",
    icon: <Target className="text-pink-600" />,
    content: "准备初会考试，准备暑期实习，录一支口播。",
    color: "bg-pink-50"
  }
];

export default function CurrentLife() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          最近的 <span className="text-yellow-500">状态</span>
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          专注当下，在跨界与深度中寻找平衡
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
        {/* Learning Map - Main Focus */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-7 p-10 border-4 border-black rounded-[48px] bg-blue-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <BookOpen className="text-blue-600" />
              </div>
              <h3 className="text-3xl font-black">核心学习路径</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "AI & 审计", desc: "Agent 开发与自动化审计流程的深度结合" },
                { label: "底层架构", desc: "编程语言架构与系统化思维的构建" },
                { label: "全球视野", desc: "英语口语实战与地道的英语思维训练" },
                { label: "财富管理", desc: "系统化理财知识与资产配置逻辑" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white border-2 border-black rounded-2xl">
                  <div className="text-blue-600 font-black mb-1"># {item.label}</div>
                  <div className="font-bold text-gray-700">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Short-term Goals - Mission Log */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-5 p-10 border-4 border-black rounded-[48px] bg-pink-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Target className="text-pink-600" />
            </div>
            <h3 className="text-3xl font-black">短期任务</h3>
          </div>
          <div className="space-y-6">
            {[
              { title: "初会考试", status: "学习中", color: "bg-yellow-200" },
              { title: "暑期实习", status: "准备中", color: "bg-green-200" },
              { title: "口播录制", status: "策划中", color: "bg-blue-200" }
            ].map((goal, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white border-2 border-black rounded-3xl">
                <span className="font-black text-xl">{goal.title}</span>
                <span className={`px-3 py-1 border-2 border-black rounded-full text-xs font-black uppercase ${goal.color}`}>
                  {goal.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cognitive Focus - Full Width Quote/Mindset */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="md:col-span-12 p-10 border-4 border-black rounded-[48px] bg-black text-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-4xl font-black text-yellow-400 uppercase italic tracking-tighter">
              Cognitive Expansion
            </h3>
            <p className="text-xl md:text-2xl font-bold leading-tight max-w-2xl">
              在认知的广度中寻找可能，在思维的深度中锚定价值。
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center font-black text-2xl">广</div>
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-black text-2xl">深</div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center pt-8">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-white border-4 border-black rounded-2xl font-black flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <Sparkles className="text-yellow-500" />
          <span>保持热爱，奔赴山海</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
