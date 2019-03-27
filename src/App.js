import React, { Component } from "react";
import "./App.css";
import FinancialGrid from "./components/FinancialGrid";
import LineChart from "./components/LineChart"
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      financialDetails: []
    };
  }

  componentDidMount() {
    const request = async () => {
      const response = await fetch("/api/sec/2019/ba", {
        headers: {
          accepts: "application/json"
        }
      });
      const data = await response.json();
      this.setState({ financialDetails: data.merged_result, chartData: data.financialCalculationsResult });
    }
    request();
  }
  render() {

    const data1 = [],columns1=[];
    
    this.state.financialDetails.forEach((elm, index) => {
      data1.push({...elm})
      
    });
    
    if(this.state.financialDetails.length > 0){
      Object.keys(this.state.financialDetails[0]).forEach(e => 
      columns1.push({Header: e, accessor: e}));
    }
    


    return (
      <div className="App">
        <ReactTable
          data={data1}
          columns={columns1}
          defaultPageSize={10}
          pageSizeOptions={[10, 6]}
        />
        <LineChart {...this.state.chartData}></LineChart>

        {/* <div ><FinancialGrid financialDetails={this.state.financialDetails}/></div> */}
      </div>
    );
  }
}

export default App;
