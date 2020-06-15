import React, { Component } from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';



class DateForm extends React.Component {
  constructor(){
    super();

    this.state = {
      startDate: new Date()
    };
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleChangeDate = date => {
    // date.preventDefault();
    this.setState({
      startDate: date     
    });
    this.props.handleChangeDate(date);
  };

  render() {

    const { values, handleChange } = this.props;
    
    return (

            <div className="container">
            <h2> Step 1: Select The Date</h2>
            <hr/>
            <br />
            <DatePicker
            selected={this.props.startDate}
            onChange={this.handleChangeDate}
            defaultValue={this.state.startDate}
            minDate={new Date()}
            dateFormat="d MMMM, yyyy"
            />

            <br /> <br />
            <Button variant="dark" style={{margin: '10px 10px '}}
              onClick={this.continue}
            >Continue</Button>

            </div>

    );
  }
}

export default DateForm;