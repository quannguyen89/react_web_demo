import React from 'react';
import House from './house.jsx';
class HouseList extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    var houses = this.props.items.map(house =>
      <House house={house}></House>
    );

    return (
      <div className="col-md-4 list">
        <h3>{this.props.children}</h3>
        { houses }
      </div>
    );
  }
}

export default HouseList;
