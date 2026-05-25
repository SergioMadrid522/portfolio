import { socialMediaLinks } from "@/data";

export default function SocialMediaLinks() {
  return (
    <>
      {socialMediaLinks.map(({ label, icon, link }) => (
        <a
          className="cursor-pointer px-8 py-3 rounded-lg font-semibold text-gray-400 hover:text-white active:text-white hover:bg-white/5 active:bg-white/5 transition flex items-center gap-2"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to ${label}`}
          key={label}
        >
          {icon}
          {label}
        </a>
      ))}
    </>
  );
}
