import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

interface Member {
  name: string;
  post: string;
  imageUrl?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const TeamCard = ({ member, isLead }: { member: Member; isLead: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative border border-white/5 transition-all duration-500 hover:bg-white/[0.02] overflow-hidden
        ${
          isLead
            ? "flex flex-row items-center p-8 gap-8 rounded-2xl"
            : "flex flex-col p-4 rounded-xl text-center"
        }`}
    >
      {/* Portrait Section */}
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl border border-white/10 group-hover:border-[#39FF14]/40 transition-all duration-700
        ${isLead ? "w-32 h-32 md:w-44 md:h-44" : "w-full aspect-square mb-4"}`}
      >
        <img
          src={
            member.imageUrl ||
            "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/avatar.png"
          }
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
      </div>

      {/* Info Section */}
      <div className={`flex flex-col ${isLead ? "text-left" : "items-center"}`}>
        <h4
          className={`font-bold tracking-tighter leading-tight transition-colors duration-500 
          ${
            isLead
              ? "text-3xl md:text-5xl text-[#39FF14]"
              : "text-lg text-white"
          }`}
        >
          {member.name}
        </h4>
        <p
          className={`uppercase tracking-[0.3em] text-gray-500 font-bold 
          ${isLead ? "text-[10px] mt-2" : "text-[8px] mt-1"}`}
        >
          {member.post}
        </p>

        {/* Social Bar */}
        <div
          className={`flex gap-4 mt-4 transition-all duration-500 
          ${
            isLead
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          }`}
        >
          {[
            { icon: Linkedin, url: member.linkedin },
            {
              icon: Github,
              url: member.github ? `https://github.com/${member.github}` : null,
            },
            { icon: Mail, url: member.email ? `mailto:${member.email}` : null },
          ].map(
            (social, i) =>
              social.url && (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-[#39FF14] transition-colors"
                >
                  <social.icon size={isLead ? 18 : 14} />
                </a>
              )
          )}
        </div>
      </div>

      {/* Subtle ID watermark only for leads */}
      {isLead && (
        <div className="absolute -right-2 -bottom-4 pointer-events-none opacity-[0.03] select-none italic text-7xl font-black">
          LEAD
        </div>
      )}
    </motion.div>
  );
};

export default TeamCard;
