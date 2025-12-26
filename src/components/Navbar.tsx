import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/resources", label: "Resources" },
    { path: "/merchandise", label: "Merch" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5 font-mono selection:bg-[#39FF14] selection:text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- LOGO SECTION: CLEAN & MONOCHROME --- */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 border border-white/10 group-hover:border-[#39FF14] transition-all duration-500">
              <Rocket className="h-5 w-5 text-white group-hover:text-[#39FF14] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white uppercase italic leading-none">
                E-Cell <span className="text-[#39FF14]">UVCE</span>
              </span>
              <span className="text-[9px] text-gray-600 tracking-[0.4em] uppercase mt-1">
                Protocol_v2.5
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAV: TYPOGRAPHY FOCUSED --- */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all group"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-white"
                      : "text-gray-500 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>

                {/* Minimalist Active Indicator: Pulsing Dot underneath */}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="ml-6 pl-6 border-l border-white/10 flex items-center">
              <Terminal className="h-4 w-4 text-gray-700 hover:text-[#39FF14] transition-colors cursor-pointer" />
            </div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="md:hidden p-2 text-white hover:text-[#39FF14] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE NAV: CLEAN SLIDE-OUT --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-between ${
                    isActive(link.path)
                      ? "text-[#39FF14]"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between text-[9px] text-gray-600 font-mono tracking-widest uppercase">
              <span>Status: Operational</span>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#39FF14] rounded-full animate-pulse" />
                <span className="text-[#39FF14]">All Nodes Online</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
