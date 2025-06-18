function Contact() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact me</h2>
      <div className="contact-content">
        <p>
          Got a project in mind, Collaboration idea, or just want to say hi?
        </p>
        <p>Let's connect!</p>
        <ul role="list">
          <li>
            Email:{" "}
            <a
              href="mailto:sergiofabian.madrid@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sergiofabian.madrid@hotmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sergio-fabian-acu%C3%B1a-madrid-59735336b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
