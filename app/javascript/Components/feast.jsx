import React, { Component } from 'react';


class FeastForm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (

            <div className='Container'>
            <input
              placeholder="Enter The Feast"
              label="Feast"
              onChange={handleChange('feast')}
              defaultValue={values.feast}
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