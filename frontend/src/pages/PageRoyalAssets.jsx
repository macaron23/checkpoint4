/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";

import axios from "axios";

export default function RoyalAssets() {
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
  );
}
