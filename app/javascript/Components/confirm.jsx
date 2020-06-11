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
    console.log('IN CONFIRMATION', this.props)
    const {
      values: { date, table, feast }
    } = this.props;
    return (
      <div>
      Please confirm your choices
        <p> {date} </p>
        <p> {table} </p>
        <p> {feast} </p>
        <br/>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Confirm your order</button>
        </div>
    );
  }
}

export default Confirm;
