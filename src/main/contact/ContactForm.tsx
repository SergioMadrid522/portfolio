function ContactForm() {
  return (
    <>
      <form action="" autoComplete="off">
        <div className="input-wrap">
          <div className="input-wrap__names">
            <div className="input-container">
              <label htmlFor="firstName">First name</label>
              <input type="text" name="" id="firstName" />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="" id="lastName" />
            </div>
          </div>
          <div className="input-wrap__important-inputs">
            <div className="input-container">
              <label htmlFor="email">Email *</label>
              <input type="text" name="" id="email" />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id="message"
                style={{ width: "100%", height: "150px", resize: "none" }}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
      <SendMessage />
    </>
  );
}
/* Send a message to the user that the form has been sent succesfully */
function SendMessage() {
  return <p>it has been sent succesfully</p>;
}
export default ContactForm;
