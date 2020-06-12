import React, { Component } from 'react';
import DateForm from './date';
import TableForm from './table';
import FeastForm from './feast';
import Confirm from './confirm';
import Success from './success';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

class Form extends React.Component {
  state = {
    step: 1,
    startDate: new Date(),
    table: '',
    feast: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    console.log(e)
    console.log(this.state)
    // this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { startDate, table, feast } = this.state;
    const values = { startDate, table, feast };

    switch (step) {
      case 1:
        return (
          <DateForm
            nextStep={this.nextStep}
            handleChange={this.handleChange()}
            values={values}
          />
        );
      case 2:
        return (
          <TableForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FeastForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
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