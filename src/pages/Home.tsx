import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Users,
  Target,
  Rocket,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import { heroSlides, partners, testimonials } from "../data";
import PartnerCard from "../components/PartnerCard";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play Hero logic restored
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

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#39FF14] selection:text-black font-sans overflow-x-hidden">
      {/* --- SUBTLE DOT MATRIX BACKGROUND --- */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        {/* --- HERO SECTION: FULL SLIDING LOGIC --- */}
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
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                <span className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold">
                  Building Bold Ideas
                </span>
              </div>

              {/* Title logic: First word white, rest gray */}
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
                <button className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#39FF14] transition-all duration-500">
                  Get Incubated
                </button>
                <button className="px-10 py-4 border border-white/10 hover:border-white/40 transition-all text-[10px] font-bold uppercase tracking-[0.2em]">
                  View Ecosystem
                </button>
              </div>
            </motion.div>
          </div>

          {/* Slider Controls (Arrow Buttons) */}
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

          {/* Slide Progress Line */}
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

        {/* --- STATS SECTION: MINIMALIST ROW --- */}
        <section className="bg-black py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Venture Capital", val: "$12M+", icon: Zap },
              { label: "Startups", val: "45", icon: Rocket },
              { label: "Global Mentors", val: "100+", icon: Globe },
              { label: "Exit Success", val: "12", icon: Trophy },
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

        {/* --- PARTNERS SECTION: THE STRIPE GRID --- */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col mb-20 items-center text-center">
              <span className="text-[#39FF14] text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
                Official Partners
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Strategic{" "}
                <span className="text-gray-600 italic">Alliances.</span>
              </h2>
            </div>

            <motion.div
              variants={containerVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10"
            >
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  variants={itemVars}
                  className="bg-black aspect-square flex items-center justify-center p-12 group transition-colors hover:bg-white/[0.02]"
                >
                  <div className="grayscale opacity-30 group-hover:opacity-100 transition-all duration-700">
                    <PartnerCard partner={partner} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-32 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700 mb-12 block">
                Community Voices
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard
                    testimonial={testimonials[currentTestimonial]}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-4 mt-16">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-0.5 transition-all duration-700 ${
                      i === currentTestimonial
                        ? "w-12 bg-[#39FF14]"
                        : "w-6 bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
