import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialMarquee = () => {
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    /* The outer container defines the overflow */
    <div className="relative flex overflow-hidden py-10 group">
      {/* Added 'hover:pause' -> This will trigger the CSS we added in tailwind.config 
         Added 'cursor-pointer' -> Visual cue that the element is interactive
      */}
      <div className="animate-testimonial-marquee flex flex-nowrap hover:pause cursor-pointer">
        {duplicatedTestimonials.map((t, idx) => (
          <TestimonialCard key={`${t.id}-${idx}`} testimonial={t} />
        ))}
      </div>

      {/* Visual edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default TestimonialMarquee;
