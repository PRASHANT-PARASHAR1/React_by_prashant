import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-emblem">
          <span>♛</span>
          <strong>PS</strong>
        </div>

        <h1>PARASHAR</h1>
        <h2>SIGNATURE</h2>

        <div className="gold-line">
          <span />
          PURE VEG &nbsp;|&nbsp; FINE DINING
          <span />
        </div>

        <p className="tagline">Where Flavours Meet Elegance</p>

        <div className="hero-actions">
          <a className="primary-btn" href="#menu">❧ &nbsp; EXPLORE MENU</a>
          <a className="outline-btn" href="#reservation">▣ &nbsp; BOOK A TABLE</a>
        </div>
      </div>

      <div className="dish">
        <div className="plate">
          <div className="dish-food">♨</div>
          <div className="dish-label">PARASHAR<br /><small>SIGNATURE</small></div>
        </div>
      </div>
    </section>
  );
}
