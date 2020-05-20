import React, { Component } from "react";
//import { useEffect } from "react";
import "./Mystock.css";
import axios from "axios";
import Price from "./Price";

export class Mystock extends Component {
  /* componentWillMount(Sym) {
     fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=Sym &apikey="HOM2RDG75OK7JRH6"&datatype=csv`
    )
      .then((res) => {
        return res.text();
      })

      .then((res) => {
        const np = parseFloat(res.split(",")[9]);
        console.log(np);
        console.log(Sym);
        if (np === "NaN") {
          //goto npp;
        } else return np;
      });
 }*/
  fetch = (Sym) => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${Sym}&apikey="HOM2RDG75OK7JRH6"&datatype=csv`
    )
      .then((res) => {
        return res.text();
      })

      .then((res) => {
        const np = parseFloat(res.split(",")[9]);
        console.log(np);
        console.log(Sym);
        if (np === "NaN") {
          //goto npp;
        } else return np;
      });
  };
  componentDidUpdate(Sym) {}

  del = (Sym, Name) => {
    axios
      .put(
        "https://stocks-7cf84.firebaseio.com/data/" + Sym + ".json",

        {
          name: Name,
          symbol: Sym,
          num: 0,
          price: 0,
        }
      )
      .then((res) => {
        console.log(this.props.Sym);
        this.props.refresh();
      });
  };
  // {<Price Sym={data.symbol} />}
  lists = () => {
    let list = [];

    for (let i in this.props.sdata) {
      const data = this.props.sdata[i];

      if (data.num !== 0) {
        list.push(
          <tr key={data.symbol}>
            <td>{data.symbol}</td>
            <td>{data.name}</td>
            <td>{data.num}</td>
            <td>{data.price}</td>
            <td>{this.fetch(data.symbol)}</td>
            <td></td>
            <td className="outbtn">
              <button
                className="btn"
                onClick={() => this.del(data.symbol, data.name)}
              >
                stop
              </button>
            </td>
          </tr>
        );
      }
    }
    return list;
  };
  render() {
    return (
      <div className="ttable">
        <table>
          <thead>
            <tr>
              <th>STOCK SYMBOL</th>
              <th>STOCK NAME</th>
              <th>SHARES</th>
              <th>BUY PRICE</th>
              <th>LIVE PRICE</th>
              <th>UP/DOWN</th>
              <th>STOP</th>
            </tr>
          </thead>
          <tbody>{this.lists()}</tbody>
        </table>
      </div>
    );
  }
}

export default Mystock;
