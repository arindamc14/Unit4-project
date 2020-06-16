import React, { Component } from 'react';
import DateForm from './date';
import TableForm from './table';
import FeastForm from './feast';
import Confirm from './confirm';
import Success from './success';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class Form extends React.Component {

  constructor(){
    super();
    this.state = {
      step: 1,
      startDate: new Date(),
      table: '',
      menu: []
    };
  }

  // Proceed to next step
  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

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
    console.log("parent form component for menu",input)
    this.setState ({
      menu: input
    })
  }

  render() {
    console.log(this.state)
    const { step } = this.state;
    const { startDate, table, menu } = this.state;
    const values = { startDate, table, menu };

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
          />
        );
      case 4:
        return (<Confirm
                nextStep={this.nextStep}
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