import React, { Component } from 'react';
import Basket from './basket';
import Menu from './menu';
import Button from 'react-bootstrap/Button';


class FeastForm extends React.Component {
  constructor() {
    super ();
    this.state = {
      menu: [],
      totalPrice: 0
    };
}

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  updateArray (array) {
    console.log(array)
    this.setState ({
      menu: array
    })
    this.calculatePrice (array);
  }
  calculatePrice (array) {
    console.log("inside calculatePrice")
    
    var anotherArray = array;
    var totalPricing = 0;
    // console.log("ANOTHER ARRRAY", anotherArray)

    for (var i=0; i<anotherArray.length; i++) {
      totalPricing = totalPricing + anotherArray[i].priceForCalculation * anotherArray[i].count;
    }
    this.setState ({
      totalPrice: totalPricing
    })
    console.log("TOTAL PRICE!!!!!!!!!!!", totalPricing)
  }

 

  render() {
    console.log("this state in feast parent", this.state)
    const { values, handleChange } = this.props;
    return (

            <div className='container'>
            <h2> Step 3: Select The Feast</h2>
              <hr/>
              <br />
            <div className="row">  
            <div className='col-8 border'>              
            <Menu updateArray={(s)=>{this.updateArray(s)}}/> 
              
            </div>
            
            <div className='col-4'>
            <Basket menu={this.state.menu}
                    totalPrice={this.state.totalPrice}/>
            </div>
            </div>

            <br /> <br />
            <Button variant="dark" style={{margin: '0px 10px '}}
              onClick={this.back}
            >Back</Button>
            <Button variant="dark" style={{margin: '0px 20px '}}
              onClick={this.continue}
            >Continue</Button>
            <br /> <br /> <br /> <br />

          </div>

    );
  }
}

export default FeastForm;