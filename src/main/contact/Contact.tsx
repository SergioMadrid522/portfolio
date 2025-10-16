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
      {/* <h3>or send me a email directly from here :)</h3>
       <ContactForm /> */}
    </section>
  );
}

export default Contact;
