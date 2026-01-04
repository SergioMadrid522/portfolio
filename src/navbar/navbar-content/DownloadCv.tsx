import CV from "../../assets/cv/SergioAcunaResume.pdf";

export default function DownloadCv() {
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
    <button className="download-cv" onClick={handleDownloadCV}>
      CV
    </button>
  );
}
