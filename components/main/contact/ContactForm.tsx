"use client";
import { GLOBAL } from "@/icons.data";
import { MacModal } from "@/components/ui/WindowModal";
import { SendEmail } from "@/hooks/SendEmail";

export default function ContactForm() {
  const { rightArrowIcon, circleIcon } = GLOBAL;
  const {
    name,
    setName,
    company,
    setCompany,
    email,
    setEmail,
    message,
    setMessage,
    loading,
    handleSubmit,
  } = SendEmail();
  return (
    <MacModal.WindowModal>
      <MacModal.WindowModalTitle>contact-me.ts</MacModal.WindowModalTitle>
      <MacModal.WindowModalContent>
        <form
          className="relative z-10 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-wider text-gray-400 uppercase">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-wider text-gray-400 uppercase">
                Company
              </label>
              <input
                type="text"
                placeholder="PheedLoop / Fable"
                value={company || ""}
                onChange={(e) => setCompany(e.target.value)}
                className="rounded-lg border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs tracking-wider text-gray-400 uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@company.com"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs tracking-wider text-gray-400 uppercase">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="How can we collaborate?"
              value={message || ""}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none rounded-lg border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group cursor-pointer mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-8 py-4 text-sm font-bold text-black transition-colors duration-300 hover:bg-yellow-400"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                Sending...
                {circleIcon()}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Mail
                {rightArrowIcon()}
              </span>
            )}
          </button>
        </form>
      </MacModal.WindowModalContent>
    </MacModal.WindowModal>
  );
}
