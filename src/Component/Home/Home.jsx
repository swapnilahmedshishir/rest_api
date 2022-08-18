import React, { useEffect, useState } from "react";
import Countrys from "../Countrys/Countrys";
import "./Home.css";
const Home = () => {
  let [countrys, setCountrys] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  return (
    <div>
      <h1>All Countrys : {countrys.length} </h1>

      {countrys.map((Cont) => (
        <Countrys key={Cont.name.common} countrys={Cont}></Countrys>
      ))}
    </div>
  );
};

export default Home;
