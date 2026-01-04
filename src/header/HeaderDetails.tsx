import SocialMedia from "./SocialMedia";

function HeaderDetails() {
  return (
    <div className="my-description-details">
      <h1>Full-Stack Web Developer</h1>

      <h3>Sergio Fabian Acuña Madrid</h3>

      <p>
        I am a Full-Stack Developer with hands-on experience in web development,
        specializing in React, TypeScript, and Node.js.
      </p>

      <p>
        Actively seeking a 4 - 6-month full-time internship starting February
        2026.
      </p>

      <p>Open to relocation.</p>
      <div className="my-social-media">
        <SocialMedia />
      </div>
    </div>
  );
}
export default HeaderDetails;
