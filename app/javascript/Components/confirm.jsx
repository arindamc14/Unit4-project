import React, { Component } from 'react';


class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const date = this.props.values.startDate.toString();

    return (
      <div className="container">
      <h2>Step 4: Please Confirm Your Choices</h2>
        <p> {date} </p>
        <p> {this.props.values.table} </p>
        <p> {this.props.values.feast} </p>
        <br/>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Confirm your order</button>
        </div>
    );
  }
}

export default Confirm;
