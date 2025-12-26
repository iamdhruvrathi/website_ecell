import { Link } from "react-router-dom";
import {
  Rocket,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { stats } from "../data";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/5 relative selection:bg-[#39FF14] selection:text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 relative z-10">
        {/* --- TOP GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="p-2.5 border border-white/10 group-hover:border-[#39FF14] group-hover:bg-[#39FF14]/5 transition-all duration-500">
                <Rocket className="h-5 w-5 text-white group-hover:text-[#39FF14] transition-colors" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase italic group-hover:text-gray-300 transition-colors">
                E-Cell <span className="text-[#39FF14]">UVCE</span>
              </span>
            </Link>

            <p className="text-[10px] text-gray-500 font-mono leading-relaxed uppercase tracking-[0.2em] max-w-[240px]">
              Accelerating innovation and venture building in the student
              ecosystem. Dream. Dare. Do.
            </p>

            {/* Social Icons - Circular Borderless Minimalist */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/ecell_uvce",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/entrepreneurship-cell-uvce",
                },
                { icon: Youtube, href: "https://www.youtube.com/@ecelluvce" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-[#39FF14] hover:bg-white/5 rounded-full transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Directory */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700 mb-10">
              Directory
            </h3>
            <ul className="space-y-4 font-mono text-[11px] uppercase tracking-widest">
              {["About", "Events", "Gallery", "Resources", "Merchandise"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-gray-500 hover:text-white flex items-center group transition-colors"
                    >
                      <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#39FF14] transition-all" />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700 mb-10">
              Initiatives
            </h3>
            <ul className="space-y-4 font-mono text-[11px] uppercase tracking-widest text-gray-500">
              {[
                "Incubation",
                "Founder's Bootcamp",
                "Mentor Connect",
                "Innovation Challenge",
              ].map((prog) => (
                <li
                  key={prog}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700 mb-10">
              Connect
            </h3>
            <div className="space-y-6 font-mono text-[11px] uppercase tracking-widest text-gray-500">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#39FF14] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  UVCE, K.R. Circle,
                  <br />
                  Bangalore 560001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#39FF14] shrink-0" />
                <a
                  href="mailto:ecell@uvce.ac.in"
                  className="hover:text-white transition-colors"
                >
                  ecell@uvce.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- STATS: HORIZONTAL MONO ROW --- */}
        <div className="flex flex-wrap items-center justify-between gap-12 py-12 border-y border-white/5 mb-12">
          {[
            { label: "Operations", val: stats.events },
            { label: "Community", val: stats.students },
            { label: "Venture_Pool", val: stats.prizes },
            { label: "Training", val: stats.workshops },
          ].map((stat, i) => (
            <div key={i} className="flex items-baseline space-x-4 group">
              <span className="text-4xl font-bold tracking-tighter text-white group-hover:text-[#39FF14] transition-colors duration-500">
                {stat.val}+
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600 group-hover:text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* --- BOTTOM TERMINAL --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-mono text-gray-700 uppercase tracking-[0.4em]">
          <p className="hover:text-gray-500 transition-colors">
            &copy; {new Date().getFullYear()} E-Cell UVCE
          </p>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] animate-pulse" />
              <span className="text-gray-500">System_Operational</span>
            </div>
            <p className="hover:text-white transition-colors cursor-crosshair">
              Dev: Tech_Archive
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
