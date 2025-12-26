import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    text: string;
    image: string;
    designation: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative p-0 h-full flex flex-col items-center text-center bg-black"
    >
      {/* --- LARGE QUOTATION MARK: EDITORIAL STYLE --- */}
      <span className="text-8xl md:text-[12rem] font-serif text-white/5 absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none italic">
        “
      </span>

      {/* --- TEXT: CENTERED & SPACIOUS --- */}
      <div className="relative z-10 mt-12 mb-16">
        <p className="text-2xl md:text-4xl font-light tracking-tight text-white leading-[1.4] italic max-w-4xl mx-auto">
          {testimonial.text}
        </p>
      </div>

      {/* --- PROFILE: MINIMALIST ATTRIBUTION --- */}
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover grayscale brightness-90 border border-white/10 p-0.5 hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle neon glow behind the avatar */}
          <div className="absolute inset-0 bg-[#39FF14]/10 blur-xl -z-10 rounded-full" />
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
            {testimonial.name}
          </h4>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-4 bg-[#39FF14]/40" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
              {testimonial.designation}
            </p>
            <div className="h-px w-4 bg-[#39FF14]/40" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
