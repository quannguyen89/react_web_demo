import React from 'react';
import Reflux from 'reflux';
import HouseList from '../components/houseList.jsx';
import Map from '../components/map.jsx';
import HouseDetail from '../components/houseDetail.jsx';
import HouseStore from '../stores/houseStore';
import ItemActions from '../actions/itemActions';
import reactMixin from 'react-mixin';
import Loader from 'react-loader';


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


  getDisplayableContent() {
    if (_.has(this.state, 'loadingHouseDetail')) {
      return (
        <Loader loaded={!this.state.loadingHouseDetail} color="#fff"  top="50%" left="50%" scale={1.00} >
          <HouseDetail house={this.state.houseDetail}></HouseDetail>
        </Loader>
      );
    } else {
      return(<Map {...this.state}></Map>);
    }
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            {this.getDisplayableContent()}
          </div>
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
