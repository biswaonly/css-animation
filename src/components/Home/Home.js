import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home">
      <nav className="navigation">
        <button onClick={() => history.push("/one")}>Four In 1</button>
        <button onClick={() => history.push("/two")}>Sun</button>
        <button onClick={() => history.push("/three")}>Moon</button>
        <button onClick={() => history.push("/four")}>Rain</button>
        <button onClick={() => history.push("/five")}>Holi</button>
        <button onClick={() => history.push("/six")}>Wheel</button>
        <button onClick={() => history.push("/seven")}>Call Button</button>
        <button onClick={() => history.push("/eight")}>Sea</button>
      </nav>
    </div>
  );
};

export default Home;
