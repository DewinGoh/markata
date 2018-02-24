import React from 'react';
import SubzoneItem from './SubzoneItem';

class DayItem extends React.Component {
  render() {
    return (
      <div className='day_item'>
        <div className="iti-headers">
        <h3>Date</h3>
        </div>
        <SubzoneItem/>
        <SubzoneItem/>
        <SubzoneItem/>
      </div>
    );
  }
}

export default DayItem;