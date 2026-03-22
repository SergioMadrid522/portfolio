type RenderAssetsProps = {
  img: string;
  imgAlt: string;
  video: string;
  projectName: string;
};
export default function RenderAssets({
  img,
  imgAlt,
  video,
  projectName,
}: RenderAssetsProps) {
  return (
    <>
      {projectName.toLowerCase() === "yama" ? (
        video ? (
          <div
            className="video-wrapper"
            style={{ objectFit: "contain", width: "350px", margin: "auto" }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              //style={{ width: "80%", height: heightVideo }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="image-wrapper">
            <img src={img} alt={imgAlt} />
          </div>
        )
      ) : video ? (
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline preload="none">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="image-wrapper">
          <img src={img} alt={imgAlt} />
        </div>
      )}
    </>
  );
}
