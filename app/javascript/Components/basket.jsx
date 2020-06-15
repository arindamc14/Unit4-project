import React, { Component } from 'react';


class Basket extends React.Component {

  render() {
    console.log("HELLO FROM BASKET", this.props)
    const cart = this.props.menu.map((element)=> {
      // console.log("Total per dish: ", element.count * element.priceForCalculation)
      if (element.count !== 0)
        return (
            <div className="row rounded" key={element.price} style={{backgroundColor: '#a9a0a0', margin:'6px auto'}}> 
              <div className="col-md-8" key={element.id}> {element.item}</div>
              <div className="col-md-4" key={element.item}> {element.count}</div>
              
            </div> 
          ) 
        
    })

    return (

            <div className='container'>
            <h2> Cart </h2> <hr/>
            {cart} <hr/>
            Total Cost for Food Items: ${this.props.totalPrice}
            </div>

    );
  }
}

export default Basket;