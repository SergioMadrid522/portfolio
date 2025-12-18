/* assets */
import CV from "../../assets/cv/SergioAcunaResume.pdf";
/* types */
import type { HeaderContentProps } from "../../types";

function HeaderDetails({ socialMedia }: { socialMedia: HeaderContentProps }) {
  const handleDownloadCV = () => {
    const url = CV;
    const nombreArchivo = "Sergio_Fabian_CV.pdf";

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", nombreArchivo);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="my-description-details">
      <h1>Full-Stack Web Developer</h1>
      <h3>Sergio Fabian Acuña Madrid</h3>
      <div className="my-social-media">
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
        <button className="download-cv" onClick={handleDownloadCV}>
          Download CV
        </button>
      </div>
    </div>
  );
}
export default HeaderDetails;
