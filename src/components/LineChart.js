import React, { Component } from "react";
import Chart from 'react-apexcharts'
class LineChart extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: 'revenues per future year'
          },
          xaxis: {
            categories: []
          }
        },
        series: [{
          name: '',
          data: []
        }]
      }
    }
    static getDerivedStateFromProps(nextProps, prevState){
      let categories=[],data=[];
      if(Object.keys(nextProps).length !== 0 && nextProps.constructor === Object){
        const keys = Object.keys(nextProps)
        for (const key of keys) {
          categories.push(nextProps[key].fiscalYear);
          data.push(nextProps[key].revenues);
        }
       /*  Object.Values(nextProps).forEach(elm => {
          categories.push(elm.fiscalYear);
          data.push(elm.revenues)
        }); */
        return { options: {
          chart: {
            id: 'revenues per future year'
          },
          xaxis: {
            categories: categories
          }
        },
        series: [{
          name: 'tell',
          data: data
        }] };
     }
     else return null;
   }
   
   componentDidUpdate(prevProps, prevState) {
       //Perform some operation here
       if (prevState.series.name !== this.state.series.name) {
          this.setState({options:this.state.options, series:this.state.series});
       }
   }
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
      )
    }
  }

  export default LineChart;