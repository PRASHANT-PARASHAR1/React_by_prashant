import React from "react";

const features = [
  ["♧", "100% PURE VEG", "Goodness of Nature"],
  ["♨", "FINE DINING", "Experience Elegance"],
  ["❧", "FRESH & QUALITY", "Hygienic & Healthy"],
  ["♟", "FAMILY RESTAURANT", "Memories Together"],
  ["♡", "SATISFACTION GUARANTEED", "Your Happiness, Our Pride"],
];

export default function Features() {
  return (
    <section className="features">
      {features.map(([icon, title, text]) => (
        <div className="feature" key={title}>
          <div className="feature-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}
