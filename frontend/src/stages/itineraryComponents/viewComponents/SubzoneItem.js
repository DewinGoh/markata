import React from 'react';

class SubzoneItem extends React.Component {
  render() {
    return (
      <div className='sub_zone_item'>
        {this.props.subzone} | Count: {this.props.pop} | <button onClick={this.props.setMap}>View</button>
      </div>
    );
  }
}

export default SubzoneItem;