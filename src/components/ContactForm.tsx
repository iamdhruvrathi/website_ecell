import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [activeForm, setActiveForm] = useState<"contact" | "volunteer">(
    "contact"
  );

  const inputStyles =
    "w-full bg-white/[0.03] border border-white/10 px-4 py-4 focus:outline-none focus:border-[#39FF14] focus:bg-white/[0.05] transition-all text-sm tracking-wide rounded-sm font-mono placeholder:text-gray-700";
  const labelStyles =
    "block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold";

  return (
    <div className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl">
      <div className="flex gap-2 mb-10 bg-white/5 p-1 rounded-full border border-white/10">
        {(["contact", "volunteer"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setActiveForm(type)}
            className={`flex-1 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
              activeForm === type
                ? "bg-[#39FF14] text-black"
                : "text-gray-500 hover:text-white"
            }`}
          >
            {type === "contact" ? "Inquiry" : "Membership"}
          </button>
        ))}
      </div>

      <form className="space-y-6">
        {activeForm === "contact" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyles}>Subject_Identity</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={inputStyles}
                />
              </div>
              <div>
                <label className={labelStyles}>Return_Address</label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className={inputStyles}
                />
              </div>
            </div>
            <div>
              <label className={labelStyles}>Message_Payload</label>
              <textarea
                rows={5}
                placeholder="Describe your inquiry..."
                className={inputStyles}
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyles}>Applicant_Name</label>
                <input type="text" className={inputStyles} />
              </div>
              <div>
                <label className={labelStyles}>Contact_Node</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={inputStyles}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className={labelStyles}>Academic_Year</label>
                <select className={inputStyles}>
                  <option className="bg-black">1st Year</option>
                  <option className="bg-black">2nd Year</option>
                  <option className="bg-black">3rd Year</option>
                  <option className="bg-black">4th Year</option>
                </select>
              </div>
              <div>
                <label className={labelStyles}>Department</label>
                <input
                  type="text"
                  placeholder="CSE / ECE / etc"
                  className={inputStyles}
                />
              </div>
            </div>
            <div>
              <label className={labelStyles}>Manifesto_Reason</label>
              <textarea
                rows={3}
                placeholder="Why do you wish to join the council?"
                className={inputStyles}
              />
            </div>
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#39FF14] text-black py-4 rounded-sm font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all"
        >
          Execute_Dispatch <Send size={14} />
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
