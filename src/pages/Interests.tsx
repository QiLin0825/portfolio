import React from 'react';
import { motion } from 'motion/react';
import { Film, Book, Music, Dumbbell, Trophy, Guitar, Cat, Sword, Heart, Camera, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const artworkCategories = [
  {
    category: "电影",
    icon: <Film size={18} />,
    color: "bg-blue-400",
    items: ["重庆森林", "情书", "饮食男女", "言叶之庭", "星际穿越"]
  },
  {
    category: "音乐",
    icon: <Music size={18} />,
    color: "bg-pink-400",
    items: ["R&B", "Hip-hop", "民谣", "轻音乐"]
  },
  {
    category: "番剧 / 轻小说",
    icon: <Book size={18} />,
    color: "bg-green-400",
    items: ["Clannad", "轻音少女", "灵能百分百", "物语系列"]
  },
  {
    category: "剧集 (美/日/英)",
    icon: <Trophy size={18} />,
    color: "bg-purple-400",
    items: ["怪奇物语", "晚酌的流派", "“是，大臣”"]
  }
];

const hobbies = [
  { 
    title: "热爱运动", 
    desc: "不止于健身房的撸铁，田径、足球、篮球都是我的热爱。在汗水中释放压力，感受纯粹而蓬勃的生命力。",
    icon: <Dumbbell className="text-orange-600" />,
    tags: ["健身", "田径", "足球", "篮球"],
    color: "bg-orange-50"
  },
  { 
    title: "音乐与艺术", 
    desc: "吉他手/键盘手，音乐是我表达情感的另一种语言，在音符中寻找共鸣。",
    icon: <Guitar className="text-blue-600" />,
    tags: ["吉他", "电子琴", "鉴赏"],
    color: "bg-blue-50"
  },
  { 
    title: "生活与美学", 
    desc: "崇尚世间一切美好与温情，在自然、生灵与烟火气中捕捉生活的诗意。",
    icon: <Heart className="text-pink-600" />,
    tags: ["真善美", "自然", "人文", "烟火气"],
    color: "bg-pink-50"
  },
  { 
    title: "摄影与纪实", 
    desc: "喜欢用镜头记录世界，捕捉人文的温度与风景的壮阔，定格那些转瞬即逝的美好瞬间。",
    icon: <Camera className="text-red-600" />,
    tags: ["人文", "风景", "纪实"],
    color: "bg-red-50"
  }
];

export default function Interests() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-20"
    >
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
          我的 <span className="text-green-600">兴趣</span>
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          在忙碌的世界中，寻找属于自己的精神角落
        </p>
      </div>

      {/* Philosophy Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-black text-white p-10 rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center space-y-4"
      >
        <p className="text-2xl md:text-3xl font-black italic tracking-tight">
          “ 喜欢了解各种知识，开拓认知的广度，思维的深度 ”
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 opacity-40 text-xs font-bold uppercase tracking-widest">
          <span># 脑科学</span>
          <span># 运动解剖</span>
          <span># 量子力学</span>
          <span># 哲学</span>
          <span># 心理学</span>
          <span># 经济学</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Favorite Artworks (Expanded) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-400 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Star size={24} className="text-black" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter">精神食粮</h3>
          </div>
          
          <div className="space-y-6">
            {artworkCategories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                <div className={cn("p-3 border-b-4 border-black flex items-center gap-2 font-black uppercase tracking-wider", cat.color)}>
                  {cat.icon}
                  <span>{cat.category}</span>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-50 border-2 border-black rounded-full text-sm font-bold">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-400 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Trophy size={24} className="text-black" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter">热爱与兴趣</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={cn("p-6 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4", hobby.color)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white border-2 border-black rounded-xl">
                    {hobby.icon}
                  </div>
                  <h4 className="text-xl font-black">{hobby.title}</h4>
                </div>
                <p className="font-medium text-gray-700 leading-relaxed">
                  {hobby.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hobby.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-white border-2 border-black rounded-lg text-xs font-black">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
