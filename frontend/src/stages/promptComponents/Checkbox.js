import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { label } = this.props;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={this.props.checked}
            onChange={this.props.handleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;