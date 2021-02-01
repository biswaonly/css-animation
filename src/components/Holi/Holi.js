import React from "react";
import "./styles.css";

const Holi = () => (
  <div className="five">
    <div className="holi">
      <h1>Happy Holi</h1>
    </div>
    <ul>
      {[...Array(6)].map(e => (
        <li></li>
      ))}
    </ul>
  </div>
);

export default Holi;
