import React, { Component } from 'react';
import './FinancialGrid.css';
class GridRowHeader extends Component {
    constructor(props) {
      super(props);
  
    }

    render() {
      
          return (
            Object.keys(this.props.titles).map((title) => {
              <div className=""><RowTitle title={title}/></div>
            })
          );
      }
  
  }
  
  
  export default GridRowHeader;
  