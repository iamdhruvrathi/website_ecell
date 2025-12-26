import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { events as eventsData } from "../data";
import EventCard from "../components/EventCard";
import Modal from "../components/Modal";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  venue: string;
  image: string;
  type: string;
  registrationLink?: string;
  fullDescription?: string;
}

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = eventsData.filter(
    (e) =>
      e.type === activeTab &&
      e.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 selection:bg-[#39FF14] selection:text-black">
      {/* --- SUBTLE DOT MATRIX BACKGROUND --- */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER: MASSIVE TYPOGRAPHY --- */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">
                Live Portal
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none">
              Building <br />
              <span className="text-gray-500">Bold Ideas.</span>
            </h1>
          </motion.div>
        </header>

        {/* --- MINIMAL FILTERS --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-white/10 pb-8">
          <div className="flex gap-8">
            {["upcoming", "past"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative pb-2 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-400"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 group-focus-within:text-[#39FF14] transition-colors" />
            <input
              type="text"
              placeholder="Search initiatives"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none pl-8 focus:ring-0 text-sm uppercase tracking-widest placeholder:text-gray-800"
            />
          </div>
        </div>

        {/* --- GRID --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10" // The gap creates thin border lines
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-black p-8 group cursor-pointer transition-colors hover:bg-white/5"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-mono text-gray-600">
                    ID_{String(event.id).padStart(3, "0")}
                  </span>
                  <ArrowUpRight
                    className="text-gray-800 group-hover:text-[#39FF14] transition-colors"
                    size={20}
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm max-w-sm line-clamp-2 italic">
                  {event.description}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- MODAL: CLEAN & SPACIOUS --- */}
        <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
          {selectedEvent && (
            <div className="bg-black text-white p-12 max-w-4xl mx-auto font-sans">
              <div className="flex justify-between items-start mb-12">
                <h2 className="text-5xl font-bold tracking-tighter">
                  {selectedEvent.title}
                </h2>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">
                    Location
                  </p>
                  <p className="text-sm font-bold">{selectedEvent.venue}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {selectedEvent.fullDescription || selectedEvent.description}
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-[#39FF14]" />
                      <span className="text-sm uppercase font-bold tracking-widest">
                        {selectedEvent.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-[#39FF14]" />
                      <span className="text-sm uppercase font-bold tracking-widest">
                        {selectedEvent.venue}
                      </span>
                    </div>
                  </div>

                  {selectedEvent.type === "upcoming" && (
                    <a
                      href={selectedEvent.registrationLink}
                      className="mt-12 block w-full bg-white text-black py-4 text-center font-bold uppercase tracking-widest hover:bg-[#39FF14] transition-colors"
                    >
                      Apply to participate
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Events;
