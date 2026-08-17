import React from "react";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-heading">
        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <span>
          We would love to welcome you at Parashar Signature
        </span>
      </div>

      <div className="contact-container">

        {/* ADDRESS */}
        <div className="contact-card">

          <div className="contact-icon">
            📍
          </div>

          <div>
            <h3>Our Address</h3>

            <p>
              Prashant Parashar
              <br />
              Village Lalpur
              <br />
              Tappal, Aligarh
              <br />
              Uttar Pradesh, India
            </p>
          </div>

        </div>


        {/* PHONE */}
        <div className="contact-card">

          <div className="contact-icon">
            📞
          </div>

          <div>
            <h3>Call Us</h3>

            <a
              href="tel:+917017178763"
              className="contact-link"
            >
              +91 70171 78763
            </a>

          </div>

        </div>


        {/* EMAIL */}
        <div className="contact-card">

          <div className="contact-icon">
            ✉️
          </div>

          <div>
            <h3>Email Us</h3>

            <a
              href="mailto:prashant112006@gmail.com"
              className="contact-link"
            >
              prashant112006@gmail.com
            </a>

          </div>

        </div>


        {/* OPENING HOURS */}
        <div className="contact-card">

          <div className="contact-icon">
            🕐
          </div>

          <div>
            <h3>Opening Hours</h3>

            <p>
              Monday - Sunday
              <br />
              11:00 AM - 11:00 PM
            </p>

          </div>

        </div>

      </div>


      {/* BOTTOM MESSAGE */}

      <div className="contact-bottom">

        <div>
          <span>VISIT US</span>

          <h2>
            Come & Experience Elegance
          </h2>
        </div>

        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noreferrer"
        >
          📍 GET DIRECTIONS
        </a>

      </div>

    </section>
  );
}

export default Contact;