import React, { Component } from "react";
import axios from "axios";
import Landing from "../Landing";
function Putdata(props) {
  update = () => {
    axios
      .put(
        "https://stocks-7cf84.firebaseio.com/data/" + this.props.Sym + ".json",

        {
          Symbol: this.props.Sym,
          num: 0,
        }
      )
      .then((res) => {
        console.log(res.data);
        return <div></div>;
      });
  };
  return (
    <div>
      {this.update()}
      <Landing />
    </div>
  );
}

export default Putdata;
