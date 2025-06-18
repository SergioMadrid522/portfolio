import type { HeaderContentProps } from "./types.ts";
// import CV from "./"; // Importa tu CV aquí
import myPicture from "../../assets/myPicture.jpg";
import "../Header.css";

function HeaderContent({ socialMedia }: { socialMedia: HeaderContentProps }) {
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
    <div className="my-description-content">
      <div className="my-image">
        <img src={myPicture} alt="A picture of Sergio Acuña" />
      </div>
      <div className="my-description-details">
        <h1>Sergio Fabian Acuña Madrid</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          tempore explicabo magni cupiditate a fugit similique soluta
          exercitationem cumque corporis ut minus excepturi hic in ad delectus
          tempora maiores aspernatur.
        </p>
        <div className="my-social-media">
          <ul>
            {socialMedia.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to social media`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={item.color}
                    viewBox="0 0 16 16"
                  >
                    <path d={item.icon} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <button onClick={handleDownloadCV}>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
