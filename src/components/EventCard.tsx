import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    description: string;
    date: string;
    venue: string;
    image: string;
    type: string;
    registrationLink?: string;
  };
  onClick: () => void;
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-black p-10 group cursor-pointer transition-all duration-500 hover:bg-white/[0.03] relative overflow-hidden h-full flex flex-col justify-between"
    >
      {/* --- TOP: METADATA & STATUS --- */}
      <div className="flex justify-between items-start mb-16 relative z-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            ID_{String(event.id).padStart(3, "0")}
          </span>
          {event.type === "upcoming" && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#39FF14]">
                Open
              </span>
            </div>
          )}
        </div>

        {/* Clean Icon Interaction */}
        <div className="p-3 rounded-full border border-white/5 group-hover:border-[#39FF14]/30 group-hover:bg-[#39FF14]/5 transition-all duration-500">
          <ArrowUpRight
            className="text-gray-700 group-hover:text-[#39FF14] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            size={20}
          />
        </div>
      </div>

      {/* --- CENTER: MASSIVE TITLES --- */}
      <div className="relative z-10">
        <h3 className="text-4xl font-bold mb-4 tracking-tighter leading-tight group-hover:text-white transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm max-w-sm line-clamp-2 italic font-light group-hover:text-gray-400 transition-colors">
          {event.description}
        </p>
      </div>

      {/* --- BOTTOM: MINIMALIST SPECS --- */}
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
          <Calendar size={12} className="text-[#39FF14]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {event.date}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-[#39FF14]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 truncate max-w-[150px]">
            {event.venue}
          </span>
        </div>
      </div>

      {/* --- SUBTLE HOVER EFFECT --- */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#39FF14]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};

export default EventCard;
