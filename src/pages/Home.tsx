import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Users,
  Rocket,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "../data/stats";
import { heroSlides } from "../data";
import PartnerMarquee from "../components/PartnerMarquee";
import TestimonialMarquee from "../components/TestimonialMarquee";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play Hero logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#39FF14] selection:text-black font-sans overflow-x-hidden">
      {/* Background Matrix */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={heroSlides[currentSlide].image}
                className="w-full h-full object-cover grayscale opacity-40"
                alt="hero-bg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </motion.div>
          </AnimatePresence>

          <div className="relative text-center px-6 max-w-6xl z-10">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-[8rem] font-bold mb-8 tracking-tighter leading-[0.9]">
                {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 0 ? "text-white" : "text-gray-600"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/events"
                  className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#39FF14] transition-all duration-500"
                >
                  View Upcoming Events
                </Link>
                <Link
                  to="/about"
                  className="px-10 py-4 border border-white/10 hover:border-white/40 transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                  More About Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <button
              onClick={prevSlide}
              className="p-4 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
            <motion.div
              key={currentSlide}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-white/40"
            />
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="bg-black py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              {
                label: "Events Conducted",
                val: `${stats.events}+`,
                icon: Rocket,
              },
              {
                label: "Students Impacted",
                val: `${stats.students}+`,
                icon: Users,
              },
              {
                label: "Prize Pool Worth",
                val: `₹${stats.prizes}+`,
                icon: Trophy,
              },
              {
                label: "Workshops Hosted",
                val: `${stats.workshops}+`,
                icon: Zap,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <span className="text-5xl font-bold tracking-tighter mb-2 group-hover:text-[#39FF14] transition-colors">
                  {stat.val}
                </span>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- PARTNERS SECTION --- */}
        <section className="py-40 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
              <div>
                <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
                  Industry & Ecosystem
                </span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                  Our <span className="text-gray-600 italic">Partners.</span>
                </h2>
              </div>
              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                Collaborating to empower student innovation.
              </p>
            </div>
          </div>
          <PartnerMarquee />
          <div className="mt-4 opacity-50">
            <PartnerMarquee reverse />
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-32 bg-black border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="relative z-20 flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#39FF14] font-mono">
                  Voices of the Ecosystem
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter relative z-10">
                Testi<span className="text-gray-600 italic">monials.</span>
              </h2>
            </div>
          </div>
          <TestimonialMarquee />
        </section>
      </div>
    </div>
  );
};

export default Home;
