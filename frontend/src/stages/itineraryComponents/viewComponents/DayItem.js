import React from 'react';
import SubzoneItem from './SubzoneItem';

class DayItem extends React.Component {
  render() {
    return (
      <div className='day_item'>
        <h3>Date</h3>
        <SubzoneItem />
        <SubzoneItem />
        <SubzoneItem />
      </div>
    );
  }
}

export default DayItem;