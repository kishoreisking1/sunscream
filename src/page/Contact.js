function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="kishore" />

        <input type="email" placeholder="sunscreem@gmail.com" />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;