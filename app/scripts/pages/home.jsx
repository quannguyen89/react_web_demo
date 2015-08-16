import React from 'react';
import Reflux from 'reflux';
import HouseList from '../components/houseList.jsx';
import Map from '../components/map.jsx';
import HouseStore from '../stores/houseStore';
import ItemActions from '../actions/itemActions';
import reactMixin from 'react-mixin';


class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    this.listenTo(HouseStore, this.onStatusChange);
    ItemActions.loadItems();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Map {...this.state}></Map>
          <HouseList {...this.state}>
            House List
          </HouseList>
        </div>
      </div>
    );
  }
}
reactMixin(Home.prototype, Reflux.ListenerMixin);
export default Home;
