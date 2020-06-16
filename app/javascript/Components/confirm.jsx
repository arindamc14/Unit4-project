import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


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
        Booking Date: 
        <div className="row rounded" 
             key="bookingDate" 
             style={{backgroundColor: '#a9a0a0', padding:'10px 10px', height: '50px', width: '700px', margin: '20px 0'}}> 
             {date} </div>
             Booking Table Option: 
        <div className="row rounded" 
             key="tableOption" 
             style={{backgroundColor: '#a9a0a0', padding:'10px 10px', height: '50px', width: '700px', margin: '20px 0'}}> 
             {this.props.values.table} </div>
        <div> Ordered Food Items: {cart} </div>
        <br /> <br />
            <Button variant="dark" style={{margin: '0px 10px '}}
              onClick={this.back}
            >Back</Button>
            <Button variant="dark" style={{margin: '0px 20px '}}
              onClick={this.continue}
            >Confrirm Order</Button>
            <br /> <br /> <br /> <br />
        </div>
    );
  }
}

export default Confirm;
