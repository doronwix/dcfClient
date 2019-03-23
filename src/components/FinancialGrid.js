import React, { Component } from "react";
import "./FinancialGrid.css";

class FinancialGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          {this.props.financialDetails.map((object, i) => (
            <Financialfield fn={object} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

function Financialfield(props) {
  let array = Object.keys(props.fn)
    //.filter(field => field !== 'EntityRegistrantName' )
    .map((field, index) => {
      let f = field.toString();
      let t = props.fn[field];
      if (t !== null) {
        return (
          <div className="grid-item">
            {" "}
            {f} : {t}{" "}
          </div>
        );
      } else {
        return <div key={index} className="App" />;
      }
    });
  return array;
}

export default FinancialGrid;
