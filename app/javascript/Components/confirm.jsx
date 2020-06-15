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
    console.log("CONFIRMATIONNN!!!!!!!#####$$%%%%%")
    console.log(this.props)
    const date = this.props.values.startDate.toString();

    const cart = this.props.values.menu.map((element)=> {
      if (element.count !== 0)
        return (
            <div className="row rounded" key={element.price} style={{backgroundColor: '#a9a0a0', margin:'6px auto'}}> 
              <div className="col-md-8" key={element.id}> Food Item: {element.item}</div>
              <div className="col-md-4" key={element.item}> Quantity: {element.count}</div>
              
            </div> 
          ) 
        
    })

    return (
      <div className="container">
      <h2>Step 4: Please Confirm Your Choices</h2> <hr/>
        <div className="row rounded" key="bookingDate" style={{backgroundColor: '#a9a0a0', padding:'10px 10px', height: '50px', width: '700px', margin: '20px 0'}}> Booking Date: {date} </div>
        <div className="row rounded" key="tableOption" style={{backgroundColor: '#a9a0a0', padding:'10px 10px', height: '50px', width: '700px', margin: '20px 0'}}> Booking Table Option: {this.props.values.table} </div>
        <p> Ordered Food Items: {cart} </p>
        <br/>
        <button onClick={this.back}>Back</button>
        <button onClick={this.continue}>Confirm your order</button>
        </div>
    );
  }
}

export default Confirm;
