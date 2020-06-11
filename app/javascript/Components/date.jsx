import React, { Component } from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";



class DateForm extends React.Component {
  state = {
    startDate: new Date()
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleChange = date => {
    // e.preventDefault();
    this.setState({
      startDate: date     
    });
    this.props.handleChange(this.state.startDate);
  };

  render() {
    const { values, handleChange } = this.props;
    return (

            <div className="container">
            <DatePicker
            selected={this.state.startDate}
            onChange={handleChange('date')}
            />

            <br />
            <button
              onClick={this.continue}
            >Continue</button>





            </div>

    );
  }
}

export default DateForm;