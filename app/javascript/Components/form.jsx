import React, { Component } from 'react';
import DateForm from './date';
import TableForm from './table';
import FeastForm from './feast';
import Confirm from './confirm';
import Success from './success';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { passCsrfToken } from '../util/helpers'

class Form extends React.Component {

  constructor(){
    super();
    this.state = {
      step: 1,
      startDate: new Date(),
      table: '',
      menu: [],
      foodCost: 0,
      tableCost: 0,
      totalCost: 0
    };
  }
  componentDidMount() {
    passCsrfToken(document, axios)
  }

  // Proceed to next step
  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
    this.tableCost();
    this.totalCost();
  };

  // Go back to prev step
  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

  postOrder = (event) => {
    console.log("about to post to backend!!!!")
    
    var orderData = this.generateOrder ();
    console.log("ORDER DATA!!!!!!!", orderData);
    const url = '../orders.json';
    axios.post(url, orderData)
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log('error from axios post request!!!!!', error);
  });
    this.nextStep();
      
    };
  generateOrder () {
    var order = {
                  sliced_lamb: this.state.menu[0].count,
                  tiger_prawns: this.state.menu[1].count,
                  dory_fish: this.state.menu[2].count,
                  baby_kailan: this.state.menu[3].count,
                  mixed_vegetables: this.state.menu[4].count,
                  sliced_chicken: this.state.menu[5].count,
                  kagoshima_japanese_wagyu_sirloin_steak: this.state.menu[6].count,
                  lobster_red_wine_sauce_and_yuzu_kosho: this.state.menu[7].count,
                  iberico_pork_pluma: this.state.menu[8].count,
                  japanese_steamed_rice: this.state.menu[9].count,
                  table: this.state.table

    }
    return order;
  }

  // Handle fields change
  handleChangeDate = input => {
    this.setState({
      startDate: input
    })
  };

  handleChangeTable = input => {
    this.setState({
      table: input
    })
  };
  //handle feast changes
  updateArray  = input => {
    this.setState ({
      menu: input
    })
  }

  totalFoodPrice = input => {
    console.log
    this.setState({
      foodCost: input
    })
  }

  tableCost () {
    var tablePrice = 0;
    if (this.state.table == 1) {
      tablePrice = 50;
    }
    else if (this.state.table == 2) {
      tablePrice = 100;
    }
    else if (this.state.table == 3) {
      tablePrice = 150;
    }
    this.setState ({
      tableCost: tablePrice
    })
  }
  totalCost () {
    var totalCost = 0;
    var foodCost = this.state.foodCost;
    var tableCost = this.state.tableCost;
    totalCost = foodCost + tableCost;
    this.setState ({
      totalCost: totalCost
    })
  }


  render() {
    const { step } = this.state;
    const { startDate, table, menu, foodCost, tableCost, totalCost} = this.state;
    const values = { startDate, table, menu, foodCost, tableCost, totalCost };

    switch (step) {
      case 1:
        return (
          <DateForm
            nextStep={this.nextStep}
            handleChangeDate={this.handleChangeDate}
            startDate={this.state.startDate}
          />
        );
      case 2:
        return (
          <TableForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChangeTable={this.handleChangeTable}
            table={this.state.table}
          />
        );
      case 3:
        return (
          <FeastForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            updateArray={this.updateArray}
            totalFoodPrice={this.totalFoodPrice}
          />
        );
      case 4:
        return (<Confirm
                postOrder={this.postOrder}
                prevStep={this.prevStep} 
                values={values}
          />
        );
       case 5:
        return <Success/>;
      
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Form;