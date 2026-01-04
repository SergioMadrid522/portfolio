/* components */
import ContactContent from "./ContactContent";

function Contact() {
  return (
    <section
      className="contact-section"
      aria-labelledby="contact-heading"
      id="contact"
    >
      <h2 id="contact-heading">Contact me</h2>

      <ContactContent />
    </section>
  );
}

export default Contact;
