import { GLOBAL } from "@/icons.data";
import { MacModal } from "@/components/ui/WindowModal";

export default function ContactForm() {
  const { rightArrowIcon } = GLOBAL;
  return (
    <MacModal.WindowModal>
      <MacModal.WindowModalTitle>contact-me.ts</MacModal.WindowModalTitle>
      <MacModal.WindowModalContent>
        <form className="relative z-10 flex flex-col gap-6">
          <div className="absolute inset-0 flex items-center justify-center gap-2 text-xs font-mono px-3 py-1.5">
            <span className="select-none text-xl flex items-center gap-2 font-mono text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20 -translate-y-5 -rotate-15">
              Coming soon!
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs tracking-wider text-gray-400 uppercase">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
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
              className="resize-none rounded-lg border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white placeholder-gray-600 transition-all duration-300 focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
            ></textarea>
          </div>

          <button
            type="button"
            className="group cursor-pointer mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#FACC15] px-8 py-4 text-sm font-bold text-black transition-colors duration-300 hover:bg-yellow-400"
          >
            Send Mail
            {rightArrowIcon()}
          </button>
        </form>
      </MacModal.WindowModalContent>
    </MacModal.WindowModal>
  );
}
