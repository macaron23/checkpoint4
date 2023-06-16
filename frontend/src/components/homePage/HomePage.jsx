import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <section className="home-welcome">
        <h1 className="home-heading">
          Welcome to the Royal Kingdom of Colchis
        </h1>
      </section>

      <section className="home-section">
        <h2 className="home-subHeading">About the Kingdom</h2>
        <p className="home-paragraph">The Royal Kingdom was...</p>
      </section>
    </div>
  );
}
