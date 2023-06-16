/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./PageRoyalAssets.css";

export default function PageRoyalAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/assets")
      .then((response) => {
        setAssets(response.data);
        console.warn(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="royal-assets-container">
        <h2>The Kingdom's Royal Assets</h2>
        <table>
          <thead>
            <tr>
              <th>Asset name</th>
              <th>Number</th>
              <th>Worth</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.name}</td>
                <td>{asset.number}</td>
                <td>{asset.worth} lari</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
