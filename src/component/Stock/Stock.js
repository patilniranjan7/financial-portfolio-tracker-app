import React, { Component } from "react";
import "./Stock.css";
import Popups from "../Popup/Popup";

class Stock extends Component {
  state = {
    mode: false,
  };
  Popup = (data) => {
    let sdata = { ...data };
    console.log(sdata);
    this.setState({
      mode: true,
      sdata,
    });
  };

  toggle = () => {
    //console.log("5");
    this.setState({ mode: false });
    this.props.refresh();
  };

  lists = () => {
    let list = [];

    for (let i in this.props.sdata) {
      const data = this.props.sdata[i];

      if (data.num === 0) {
        list.push(
          <li key={i}>
            <div>
              <button
                className="StockButton"
                onClick={this.Popup.bind(this, data)}
              >
                {data.symbol}
              </button>
              <span>{data.name}</span>
            </div>
          </li>
        );
      }
    }
    return list;
  };

  render() {
    return (
      <div className="AddStocksTitle">
        <h1 className="shead">Add Stock</h1>
        <ul className="flex">{this.lists()}</ul>
        <Popups
          show={this.state.mode}
          selectedStock={this.state.sdata}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default Stock;
