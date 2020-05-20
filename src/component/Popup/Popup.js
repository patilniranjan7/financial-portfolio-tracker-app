import React, { Component } from "react";
import "./Popup.css";
import Axios from "axios";

class Modal extends Component {
  putRequest = (stock) => {
    let shares = document.getElementById("noShares").value;
    let buyprice = document.getElementById("buyPrice").value;

    if (shares > 0 && buyprice > 0) {
      Axios.put(
        `https://stocks-7cf84.firebaseio.com/data/` +
          this.props.selectedStock.symbol +
          `.json`,
        {
          symbol: this.props.selectedStock.symbol,
          name: this.props.selectedStock.name,
          num: shares,
          price: buyprice,
        }
      ).then(() => this.props.toggle());
    } else {
      alert("Please fill all the fields!");
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <div className="AddStockForm">
          <div className="modal-content">
            <div className="npp">
              <span className="close" onClick={() => this.props.toggle()}>
                &times;
              </span>
              <br />
              <h1 className="p">{this.props.selectedStock?.name}</h1>
            </div>

            <br></br>
            <div>
              <span className="label">No. of Shares :</span>
              <input
                id="noShares"
                type="number"
                className="value"
                min="1"
                placeholder="No. of shares"
              ></input>
            </div>

            <br></br>
            <div>
              <span className="label">Buy Price :</span>
              <div className="value">
                <input
                  id="buyPrice"
                  type="number"
                  min="1"
                  placeholder="Buy Price"
                ></input>
              </div>
            </div>
            <br></br>

            <div>
              <span className="label">Buy Date :</span>
              <input id="buyDate" type="date" className="value"></input>
            </div>
            <br></br>

            <div className="np">
              <button
                id="modaladdbtn"
                className="AddButton"
                onClick={this.putRequest.bind(this, this.props.selectedStock)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
