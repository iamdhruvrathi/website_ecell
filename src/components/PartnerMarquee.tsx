import { partners } from "../data/partners";

interface MarqueeProps {
  reverse?: boolean;
}

const PartnerMarquee = ({ reverse = false }: MarqueeProps) => {
  // Triple the array for a seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    /* Added 'group' to the parent to allow inner elements to respond to hover */
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-black py-12 group">
      <div
        className={`flex whitespace-nowrap gap-24 items-center cursor-pointer ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:pause`} // Added group-hover:pause to stop the animation
      >
        {duplicatedPartners.map((partner, idx) => (
          <a
            key={`${partner.id}-${idx}`}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[200px] md:min-w-[320px] transition-all duration-500"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 md:h-24 w-auto object-contain transition-all duration-700 hover:scale-110"
            />
          </a>
        ))}
      </div>

      {/* Side gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default PartnerMarquee;
