import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, GraduationCap, Code, Heart, BookOpen, Menu, X, Sparkles, Activity } from 'lucide-react';
import { cn } from './lib/utils';

// Components
import HomePage from './pages/Home';
import EducationPage from './pages/Education';
import SkillsPage from './pages/Skills';
import CurrentLifePage from './pages/CurrentLife';
import InterestsPage from './pages/Interests';

const navItems = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'education', label: '院校', icon: GraduationCap },
  { id: 'skills', label: '技能', icon: Code },
  { id: 'life', label: '生活', icon: Activity },
  { id: 'interests', label: '兴趣', icon: Heart },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center justify-between">
        <button onClick={() => scrollToSection('home')} className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-yellow-400 border-2 border-black rounded-full" />
          PORTFOLIO
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-bold text-sm uppercase tracking-wider transition-all hover:text-blue-600 cursor-pointer",
                activeSection === item.id ? "text-blue-600 underline underline-offset-4" : "text-black"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border-2 border-black rounded-lg bg-yellow-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-4 font-bold text-lg p-3 border-2 border-transparent rounded-xl hover:border-black hover:bg-blue-50 transition-all text-left w-full",
                    activeSection === item.id ? "bg-blue-50 border-black" : ""
                  )}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] font-sans text-black selection:bg-yellow-400 selection:text-black">
      <Navbar />
      
      <div className="space-y-32 pb-20">
        <section id="home" className="min-h-screen flex items-center pt-32 px-6 max-w-6xl mx-auto">
          <HomePage />
        </section>

        <section id="education" className="px-6 max-w-6xl mx-auto">
          <EducationPage />
        </section>

        <section id="skills" className="px-6 max-w-6xl mx-auto">
          <SkillsPage />
        </section>

        <section id="life" className="px-6 max-w-6xl mx-auto">
          <CurrentLifePage />
        </section>

        <section id="interests" className="px-6 max-w-6xl mx-auto">
          <InterestsPage />
        </section>
      </div>
    </div>
  );
}
