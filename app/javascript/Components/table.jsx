import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class TableForm extends React.Component {
  constructor(){
    super();
    this.state = {
      table: 0
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

  handleChangeTable (table) {
    console.log(table)
    this.setState ({
          table: table
        })
    this.props.handleChangeTable(table)
  };

  
  render() {
    const { values, handleChange } = this.props;
    return (

            <div className='container' >
            <h2> Step 2: Select The Teppan Table Size</h2>
            <hr/>
            <br />
            
              <Card style={{backgroundColor: '#cac5c5', width: '18rem' }}>
              <Card.Body>
                <Card.Title>Option 1</Card.Title>
                <Card.Text>
                  <a>Caters to 1-4 persons</a><br/>
                  <a>Price: $50</a>
                </Card.Text>
                <Button onClick={()=>{this.handleChangeTable(1)}}
                  variant="secondary">Select</Button>
              </Card.Body>
            </Card>
            <br />
              <Card style={{backgroundColor: '#cac5c5', width: '18rem' }}>
              <Card.Body>
                <Card.Title>Option 2</Card.Title>
                <Card.Text>
                  <a>Caters to 5-10 persons</a><br/>
                  <a>Price: $100</a>
                </Card.Text>
                <Button onClick={()=>{this.handleChangeTable(2)}}
                variant="secondary">Select</Button>
               </Card.Body>
             </Card>
            <br />
             <Card style={{backgroundColor: '#cac5c5', width: '18rem' }}>
              <Card.Body>
                <Card.Title>Option 3</Card.Title>
                <Card.Text>
                  <a>Caters to 10-15 persons</a><br/>
                  <a>Price: $150</a>
                </Card.Text>
                <Button onClick={()=>{this.handleChangeTable(3)}}
                variant="secondary">Select</Button>
              </Card.Body>
            </Card>

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

export default TableForm;