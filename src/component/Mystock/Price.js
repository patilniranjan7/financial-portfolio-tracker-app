import React from "react";
import { useEffect, useState } from "react";
import "./Price.css";

const Price = (props) => {
  const [val, setval] = useState(0);
  const Sym = props.Sym;
  const price = props.price;

  useEffect(() => {
    console.log("eee");
    //debugger;
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${Sym}&apikey="HOM2RDG75OK7JRH6"&datatype=csv`
    )
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        const np = parseFloat(res.split(",")[9]);
        isNaN(np) ? setval(0) : setval(np);
      });
    if (props.flag) {
      setval(val);
    } else setval(price - val);
  }, [Sym]);
  return <div>{val}</div>;
};

export default Price;
