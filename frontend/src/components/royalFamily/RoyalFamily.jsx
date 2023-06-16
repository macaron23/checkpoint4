import React from "react";
import "./RoyalFamily.css";
import aeetesImage from "../../assets/King-Aeetes.jpg";
import medeasImage from "../../assets/Princess-Medeas.jpg";
import idiaImage from "../../assets/Queen-Idia.jpg";

export default function RoyalFamily() {
  return (
    <div className="royal-family-container">
      <section id="RoyalFamily">
        <h2>The Royal Family</h2>
        <div className="flex-container">
          <div>
            <img src={aeetesImage} alt="Aeetes" height="400" width="300" />
            <p>King Aeetes</p>
          </div>

          <div>
            <img src={medeasImage} alt="Medeas" height="400" width="300" />
            <p>Princess Medeas</p>
          </div>

          <div>
            <img src={idiaImage} alt="Idia" height="400" width="300" />
            <p>Queen Idia</p>
          </div>
        </div>
      </section>
    </div>
  );
}
