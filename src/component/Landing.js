import React from "react";
import "./Landing.css";
import Mystock from "./Mystock/Mystock";
import Stock from "./Stock/Stock";
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = (props) => {
  const [sdata, setdata] = useState([]);
  const [update, setupdate] = useState(0);

  useEffect(() => {
    axios
      .get("https://stocks-7cf84.firebaseio.com/data.json")
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  console.log(sdata);
  return (
    <div>
      <h1 className="head">Finance Portfolio Tracker</h1>
      <Mystock sdata={sdata} refresh={() => setupdate((s) => s + 1)} />
      <br /> <br /> <br />
      <hr className="line" />
      <Stock sdata={sdata} refresh={() => setupdate((s) => s + 1)} />
    </div>
  );
};

export default Landing;
