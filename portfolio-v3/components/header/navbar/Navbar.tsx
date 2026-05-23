import { navbarOptions } from "@/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-1 sticky top-0 p-5 w-full backdrop-blur-xl bg-[#0A0A0A]/60 border-b border-white/10 z-50">
      <Link
        href={"/"}
        className="font-mono text-2xl font-bold tracking-tighter text-white "
      >
        <span className="text-gray-500">&lt;</span>SA{" "}
        <span className="text-[#FACC15]">/</span>
        <span className="text-gray-500">&gt;</span>
      </Link>

      <ul className="flex flex-2 justify-end gap-8">
        {navbarOptions.map(({ label, link }) => (
          <li key={label}>
            <Link href={`${link}`} className="text-m font-medium text-gray-400">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
