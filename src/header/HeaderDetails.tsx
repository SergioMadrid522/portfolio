import SocialMedia from "./SocialMedia";

function HeaderDetails() {
  return (
    <div className="my-description-details">
      <h1>Full-Stack Software Engineer</h1>

      <h3>Sergio Fabian Acuña Madrid</h3>

      <p>
        I am a Full-Stack Software Engineer specializing in Next.js, TypeScript,
        and Node.js. Beyond writing clean code, I bring a strong product
        mindset—focusing on scalable cloud architectures, mobile-first UI/UX,
        and ensuring absolute software reliability through E2E automated
        testing. Open to remote roles where I can translate complex business
        needs into high-performance web products.
      </p>

      <div className="my-social-media">
        <SocialMedia />
      </div>
    </div>
  );
}
export default HeaderDetails;
