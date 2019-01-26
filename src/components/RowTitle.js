import React, { Component } from 'react';
import './FinancialGrid.css';
class RowTitle extends Component {
    constructor(props) {
      super(props);
  
    }

    render() {
          return (
           
              <div className="">{props.title}</div>
           
          );
      }
  
  }
  
  
  export default RowTitle;
  