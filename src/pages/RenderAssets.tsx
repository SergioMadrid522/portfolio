type RenderAssetsProps = {
  img: string;
  imgAlt: string;
  video: string;
};
export default function RenderAssets({
  img,
  imgAlt,
  video,
}: RenderAssetsProps) {
  return (
    <>
      {video ? (
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
