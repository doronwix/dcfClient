import React, { Component } from 'react';
import './App.css';
import FinancialGrid from './components/FinancialGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      financialDetails: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/sec/2018/tell')
      .then(response => response.json())
      .then(data => {
        this.setState({ financialDetails: data.merged_result });
    })
  }
  
  render() {
    
        return (
          <div className="App">
            <div ><FinancialGrid financialDetails={this.state.financialDetails}/></div>
          </div>
        );
    }

}


export default App;
