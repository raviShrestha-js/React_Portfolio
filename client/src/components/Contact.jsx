const Contact = () => {
  return (
    <section className="contact-me" id="contact-me">
      <h1>Contact Me</h1>
      <div className="row1">
        <div className="col">
          <i className="fa-solid fa-location-crosshairs"></i>
          <h3>My Location:</h3>
          <h3 className="secondary-text">Strathfield, Sydney, Australia</h3>
        </div>
        <div className="col">
          <i className="fa-solid fa-phone"></i>
          <h3>Phone Number:</h3>
          <h3 className="secondary-text">+61 405 865 832</h3>
        </div>
        <div className="col">
          <i className="fa-regular fa-envelope"></i>
          <h3>Email Address</h3>
          <h3 className="secondary-text">edenderb@gmail.com</h3>
        </div>
      </div>
      <div className="row2">
        <div className="col1">
          <form action="https://formspree.io/f/meqnpqvw" method="POST">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              required
            />
            <br />
            <textarea
              rows="6"
              cols="60"
              placeholder="Message"
              id="message"
              name="message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="col1" id="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.807143226136!2d151.08679061504557!3d-33.868860780656256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb261c6f3557%3A0xe85ce7b41a7c6ccc!2s9%2F1%20The%20Crescent%2C%20Strathfield%20NSW%202135!5e0!3m2!1sne!2sau!4v1650291083360!5m2!1sne!2sau"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
