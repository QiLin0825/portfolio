import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          我的 <span className="text-blue-600">院校</span>
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          我的学术背景与专业追求
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          whileHover={{ x: 10 }}
          className="bg-white border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 border-l-4 border-b-4 border-black -mr-16 -mt-16 rotate-45" />
          
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-blue-100 border-2 border-black rounded-2xl">
              <GraduationCap size={40} className="text-blue-600" />
            </div>
            
            <div className="space-y-6 flex-1">
              <div>
                <h3 className="text-3xl font-black">南昌交通学院</h3>
                <div className="flex items-center gap-2 text-gray-500 font-bold mt-1">
                  <Calendar size={18} />
                  <span>2024年 - 2028年</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-pink-50 border-2 border-black rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 font-black text-pink-600">
                    <BookOpen size={20} />
                    <span>主修专业</span>
                  </div>
                  <p className="text-xl font-bold">金融学 (Finance)</p>
                </div>

                <div className="p-6 bg-green-50 border-2 border-black rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 font-black text-green-600">
                    <Award size={20} />
                    <span>辅修专业</span>
                  </div>
                  <p className="text-xl font-bold">法学 (Law)</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-2 border-black rounded-2xl">
                <p className="text-lg font-medium text-gray-700 leading-relaxed">
                  在南昌交通学院的学习生涯中，我致力于构建跨学科的知识体系。通过金融学的系统学习，我掌握了资本运作、风险管理及数据分析的核心逻辑；同时，辅修法学让我具备了严谨的法律思维和合规意识，力求在金融与法律的交汇点探索更多可能。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
