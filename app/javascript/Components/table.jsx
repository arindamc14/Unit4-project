import React, { Component } from 'react';


class TableForm extends React.Component {
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
              placeholder="Enter The Table Size"
              label="First Name"
              onChange={handleChange('table')}
              defaultValue={values.table}
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

export default TableForm;