import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Menu extends React.Component {

  constructor() {
    super ();
    this.state = {
      menu: []
    };
}
  componentDidMount(){
    console.log("inside get MENU!!@@#$#$#%^^$%$%$%")
    const url = '../menus.json';

    axios.get(url)
    .then((response) => {

      const data = response.data

      this.setState({ menu: data })

    }).catch((error)=>{
      console.log(error);
    })
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



