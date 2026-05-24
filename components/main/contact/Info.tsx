import { GLOBAL } from "@/icons.data";

export default function Info() {
  const { mailIcon } = GLOBAL;
  return (
    <div className="flex flex-col">
      <h4 className="mb-6 text-4xl font-extrabold text-white">
        Let's build the next <br />
        <span className="bg-gradient-to-r from-[#FACC15] to-yellow-600 bg-clip-text text-transparent">
          great product.
        </span>
      </h4>

      <p className="mb-10 max-w-md text-lg leading-relaxed text-gray-400">
        Whether you have a question, an open position, or just want to discuss
        software architecture and E2E testing, my inbox is open.
      </p>
      <a
        href="mailto:sergioac.madrid@hotmail.com"
        className="flex items-center gap-4 text-gray-400 hover:text-[#FACC15] active:text-[#FACC15] transition-colors group"
      >
        <div className="w-10 h-10 rounded-lg bg-[#151515] border border-white/10 flex items-center justify-center group-hover:border-[#FACC15]/50 group-active:border-[#FACC15]/50 transition-colors">
          {mailIcon()}
        </div>
        Send me an Email
      </a>
    </div>
  );
}
