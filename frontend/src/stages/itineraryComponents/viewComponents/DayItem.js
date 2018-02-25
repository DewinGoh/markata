import React from 'react';
import SubzoneItem from './SubzoneItem';

class DayItem extends React.Component {
  render() {
    const subzoneItems = Object.keys(this.props.data).map(key => {
      return (<SubzoneItem 
        subzone={this.props.data[key].subzone} 
        pop={this.props.data[key].pop} 
        setMap={() => {this.props.setMap(this.props.data[key].subzone)}}
        key={key}
      />);
    });
    return (
      <div className='day_item'>
        <div className="iti-headers-day">
        <h3>{this.props.day}</h3>
        </div>
        {subzoneItems}
      </div>
    );
  }
}

export default DayItem;