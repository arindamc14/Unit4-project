import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Menu extends React.Component {

  constructor() {
    super ();
    this.state = {
      menu: [{
        id: 1,
        item: "Sliced Lamb",
        price: " -$15/100g",
        priceForCalculation: 15,
        count: 0
      },
      {
        id: 2,
        item: "Tiger Prawns",
        price: " -$16/100g",
        priceForCalculation: 10,
        count: 0
      },
      {
        id: 3,
        item: "Dory Fish",
        price: " -$8/100g",
        priceForCalculation: 8,
        count: 0
      },
      {
        id: 4,
        item: "Baby Kailan",
        price: " -$10/100g",
        priceForCalculation: 10,
        count: 0
      },
      {
        id: 5,
        item: "Mixed Vegetables",
        price: " -$5/100g",
        priceForCalculation: 5,
        count: 0
      },
      {
        id: 6,
        item: "Sliced Chicken",
        price: " -$12/100g",
        priceForCalculation: 10,
        count: 0
      },
      {
        id: 7,
        item: "Kagoshima Japanese Wagyu Sirloin Steak",
        price: " -$138/100g",
        priceForCalculation: 138,
        count: 0
      },
      {
        id: 8,
        item: "Lobster, Red Wine Sauce and Yuzu Kosho",
        price: " -$128/100g",
        priceForCalculation: 128,
        count: 0
      },
      {
        id: 9,
        item: "Iberico Pork “Pluma”",
        price: " -$50/100g",
        priceForCalculation: 50,
        count: 0
      },
      {
        id: 10,
        item: "Japanese Steamed Rice",
        price: " -$2/bowl",
        priceForCalculation: 2,
        count: 0
      }]
    };
}
  addToCart (item) {
    let index = item.id - 1;

    if (item !== null)
    {
      let myArray = this.state.menu;
      let myObject = myArray[index];
      myObject.count = myObject.count + 1;
      myArray[index] = myObject;
      this.setState ({
        menu: myArray
      });    
      }
      this.props.updateArray(this.state.menu);
  };

  removeFromCart (item) {
    console.log(item)
    let index = item.id - 1;
    if (item !== null)
    {
      let myArray = this.state.menu;
      let myObject = myArray[index];
      if (myObject.count !== 0)
      {

        myObject.count = myObject.count - 1;
        myArray[index] = myObject;
        this.setState ({
          menu: myArray
        });
      }
      }
      this.props.updateArray(this.state.menu);
  }

  render() {
    const items = this.state.menu.map(item => {
      return <div className="row border border-primary rounded" 
                  style={{backgroundColor: '#cac5c5', margin: '15px 2px', height:'60px', padding: '5px 5px'}}
                  key={item.id}
                  >
                  <div className="col-md-9">
                  {item.item} {item.price}
                  </div>
                  <div className="col-md-3">
                    <div className="container" style={{margin: '7px', height:'5px'}}>

                      <Button type="button" 
                              className="btn btn-danger" 
                              style={{margin: '0px 2px'}}
                              onClick={(e) => this.removeFromCart(item)}>
          
                      -
                      </Button>

                      {item.count}

                      <Button type="button"
                              className="btn btn-success" 
                              style={{margin: '0px 2px'}}
                              onClick={(e) => this.addToCart(item)}>
                      +
                      </Button>

                    </div>
                  </div>

             </div>});
                            

    return (

            <div className='container'>
            <br/>
            <h3> Menu </h3>
            <hr/>
              {items}
            </div>

    );
  }
}



export default Menu;



