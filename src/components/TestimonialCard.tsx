import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="w-[380px] md:w-[450px] shrink-0 bg-white/[0.02] border border-white/5 p-8 rounded-2xl group/card hover:border-[#39FF14]/30 transition-all duration-500 mx-4 flex flex-col justify-between">
      <div>
        <Quote
          className="text-[#39FF14] mb-6 opacity-40 group-hover/card:opacity-100 transition-opacity"
          size={24}
        />
        <p className="text-sm md:text-base font-light leading-relaxed text-gray-400 mb-8 whitespace-normal">
          "{testimonial.text}"
        </p>
      </div>

      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 border border-white/10"
        />
        <div className="flex flex-col text-left">
          <h4 className="text-sm font-bold text-white tracking-tight whitespace-nowrap">
            {testimonial.name}
          </h4>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#39FF14] font-mono whitespace-nowrap">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
