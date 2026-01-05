import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Target, Eye, Sparkles, History } from "lucide-react";
import { teamData } from "../data/team";
import TeamCard from "../components/TeamCard";

const formatTeamName = (key: string): string => {
  const formatted = key.replace(/([A-Z])/g, " $1");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const isLead = (post: string): boolean => {
  const lower = post.toLowerCase();
  return ["president", "lead", "head", "vice president"].some((r) =>
    lower.includes(r)
  );
};

const About = () => {
  const [selectedYear, setSelectedYear] = useState(teamData[0]?.year || "");
  const selectedTeam = teamData.find((team) => team.year === selectedYear);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 font-sans selection:bg-[#39FF14] selection:text-black">
      {/* --- BACKGROUND DOT MATRIX --- */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER SECTION: MASSIVE TYPOGRAPHY --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={14} className="text-[#39FF14] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">
              The Protocol
            </span>
          </div>
          <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8">
            Our <br />
            <span className="text-gray-600 italic font-light">Purpose.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
            E-Cell UVCE is an institutional-grade platform designed to nurture
            the architects of tomorrow's startup ecosystem.
          </p>
        </motion.div>

        {/* --- VISION & MISSION: BENTO BOXES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-40">
          {[
            {
              title: "Our Vision",
              icon: Eye,
              text: "To foster a dynamic ecosystem where aspiring entrepreneurs are empowered with resources, mentorship, and networking opportunities to transform their ideas into impactful ventures. Through inclusive programs and a culture of innovation, we strive to cultivate a new generation of visionary leaders dedicated to driving positive change and creating a more prosperous future.",
            },
            {
              title: "Our Mission",
              icon: Target,
              text: "To inspire, educate, and support aspiring entrepreneurs through comprehensive resources and opportunities, fostering a culture of innovation and collaboration to catalyse the growth of impactful ventures.",
            },
            {
              title: "History",
              icon: History,
              text: [
                "The Entrepreneurship Cell of UVCE, founded in 2014 by Tejas Narayan, stands tall as a student-run body with the goal of fostering an entrepreneurial culture and providing the most unique opportunities to the student community. In 2019, the club was re-organized with support from the alumni. We, at the Entrepreneurship Cell UVCE, seek to instil an Entrepreneurship drive among the students of the college.",

                "With our numerous workshops, seminars, and events, we aim to further the students' understanding of business from how to chalk out a business plan to executing it. The E-Cell envisions nurturing the innovative potential of every student, in a bid to invigorate and inspire them to get one step closer to their entrepreneurial vision.",

                "From networking, and business modelling to investor pitches, E-Cell continually strives to provide students with a platform to holistically develop, learn and expand the horizon of opportunities that lie before them. We also provide opportunities for our members to gain a better understanding of the finance world by facilitating regular interactions with them.",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#39FF14]/30 transition-all duration-500 group"
            >
              <item.icon className="h-10 w-10 text-[#39FF14] mb-12 group-hover:scale-110 transition-transform" />

              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tighter">
                {item.title}
              </h2>

              {/* 🔹 FIXED TEXT RENDERING */}
              {Array.isArray(item.text) ? (
                <div className="space-y-4">
                  {item.text.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-gray-500 leading-relaxed font-light text-lg"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 leading-relaxed font-light text-lg">
                  {item.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- TEAM SECTION --- */}
        <section className="py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Camera size={14} className="text-[#39FF14]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">
                  Personnel_Directory
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                The{" "}
                <span className="text-gray-600 italic font-light">
                  Council.
                </span>
              </h2>
            </div>

            {/* Year Selector */}
            <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {teamData.map((team) => (
                <button
                  key={team.year}
                  onClick={() => setSelectedYear(team.year)}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                    selectedYear === team.year
                      ? "bg-[#39FF14] text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {team.year}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {selectedTeam ? (
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-32"
              >
                {Object.entries(selectedTeam).map(([teamName, members]) => {
                  if (
                    teamName === "year" ||
                    !Array.isArray(members) ||
                    members.length === 0
                  )
                    return null;

                  // Split members into two groups
                  const leads = members.filter((m) => isLead(m.post));
                  const regularMembers = members.filter((m) => !isLead(m.post));

                  return (
                    <div key={teamName} className="relative">
                      {/* Sticky Section Header */}
                      <div className="sticky top-24 z-20 bg-black/50 backdrop-blur-sm py-4 mb-12 border-b border-white/5">
                        <h3 className="text-[10px] uppercase tracking-[0.8em] text-[#39FF14] font-mono font-black">
                          // SECTION: {teamName.toUpperCase()}
                        </h3>
                      </div>

                      {/* LEADS ROW: Max 2 per line */}
                      {leads.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                          {leads.map((member, index) => (
                            <TeamCard
                              key={`lead-${index}`}
                              member={member}
                              isLead={true}
                            />
                          ))}
                        </div>
                      )}

                      {/* MEMBERS GRID: Max 5 per line */}
                      {regularMembers.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                          {regularMembers.map((member, index) => (
                            <TeamCard
                              key={`member-${index}`}
                              member={member}
                              isLead={false}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="text-center py-40 border border-dashed border-white/10 rounded-3xl">
                <p className="text-gray-600 uppercase tracking-[0.4em] text-xs animate-pulse">
                  System_Updating... Personnel_Data_Syncing
                </p>
              </div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};

export default About;
