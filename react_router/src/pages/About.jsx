import React from "react";

function About() {
  return (
    <section className="about-page">

      {/* HERO */}

      <div className="about-heading">

        <p>ABOUT PARASHAR SIGNATURE</p>

        <h1>Where Flavours Meet Elegance</h1>

        <span>
          A premium pure vegetarian dining experience in Tappal
        </span>

      </div>


      {/* MAIN CONTENT */}

      <div className="about-container">

        <div className="about-image">
          <div className="about-logo">
            <span>♛</span>
            <strong>PS</strong>
            <small>PARASHAR</small>
            <small>SIGNATURE</small>
          </div>
        </div>


        <div className="about-content">

          <p className="about-small-title">
            WELCOME TO PARASHAR SIGNATURE
          </p>

          <h2>
            Taste That Brings People Together
          </h2>

          <p>
            Welcome to <strong>Parashar Signature</strong>, a premium
            pure vegetarian restaurant located in Tappal, Aligarh.
            We believe that great food is not just about taste,
            but also about quality, freshness and the experience
            we create for our guests.
          </p>

          <p>
            From delicious vegetarian dishes to a warm and elegant
            atmosphere, every detail at Parashar Signature is
            thoughtfully created to make your dining experience
            memorable.
          </p>

          <p>
            Whether you are enjoying a family dinner, celebrating
            a special occasion or simply looking for delicious
            vegetarian food in Tappal, we are happy to welcome you.
          </p>

        </div>

      </div>


      {/* FEATURES */}

      <div className="about-features">

        <div className="about-feature">
          <div>🌿</div>
          <h3>100% Pure Veg</h3>
          <p>
            Fresh and delicious vegetarian food prepared with care.
          </p>
        </div>


        <div className="about-feature">
          <div>✨</div>
          <h3>Fine Dining</h3>
          <p>
            An elegant atmosphere designed for a comfortable experience.
          </p>
        </div>


        <div className="about-feature">
          <div>👨‍👩‍👧‍👦</div>
          <h3>Family Friendly</h3>
          <p>
            A perfect place to enjoy memorable moments with your family.
          </p>
        </div>


        <div className="about-feature">
          <div>❤️</div>
          <h3>Made With Love</h3>
          <p>
            Every dish is prepared with attention, passion and care.
          </p>
        </div>

      </div>


      {/* LOCATION */}

      <div className="about-location">

        <p>OUR LOCATION</p>

        <h2>
          Proudly Serving Tappal & Nearby Areas
        </h2>

        <span>
          Visit Parashar Signature in Tappal, Aligarh and
          experience delicious pure vegetarian food in an elegant
          and welcoming environment.
        </span>

      </div>

    </section>
  );
}

export default About;