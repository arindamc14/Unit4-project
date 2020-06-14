import React, { Component } from 'react';


class FeastForm extends React.Component {
  constructor() {
    super ();
    this.state = {
      feast: 0
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

  handleChangeFeast = feast => {
    // e.preventDefault();
    this.setState({
      feast: feast.target.value     
    });
    this.props.handleChangeFeast(feast.target.value);
  };

  render() {
    const { values, handleChange } = this.props;
    return (

            <div className='container'>
            <h2> Step 3: Select The Feast</h2>
            <br />
            <input
              placeholder="Enter The Feast"
              label="Feast"
              onChange={this.handleChangeFeast}
              // defaultValue={values.feast}
            />
            <br />
            <button
              onClick={this.back}
            >Back</button>
            <button
              onClick={this.continue}
            >Continue</button>
            </div>

    );
  }
}

export default FeastForm;