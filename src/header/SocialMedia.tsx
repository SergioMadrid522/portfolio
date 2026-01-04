import { socialMedia } from "../data";

export default function SocialMedia() {
  return (
    <>
      {
        <ul>
          {socialMedia.map(({ link, color, icon }, idx) => (
            <li key={idx}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to social media`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={color}
                  viewBox="0 0 16 16"
                >
                  <path d={icon} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      }
    </>
  );
}
