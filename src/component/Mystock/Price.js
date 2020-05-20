import React from "react";
import { useEffect, useState } from "react";

export const Price = (props) => {
  //const [np, setnp] = useState();
  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=Sym &apikey="HOM2RDG75OK7JRH6"&datatype=csv`
    )
      .then((res) => {
        return res.text();
      })

      .then((res) => {
        const np = parseFloat(res.split(",")[9]);
        console.log(np);
        console.log(this.props.Sym);
      });
  });
  return (
    <div>
      <td></td>
    </div>
  );
};

export default Price;
