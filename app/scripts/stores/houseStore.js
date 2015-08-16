import Reflux from 'reflux';
import ItemActions from '../actions/itemActions';

var HouseStore = Reflux.createStore({

  init() {
    this.items = [];

    this.listenTo(ItemActions.loadItems, this.loadItems);
    this.listenTo(ItemActions.loadItemsSuccess, this.loadItemsSuccess);
    this.listenTo(ItemActions.loadItemsError, this.loadItemsError);
    this.listenTo(ItemActions.loadMapData, this.loadMapData);
    this.listenTo(ItemActions.loadMapDataSuccess, this.loadMapDataSuccess);
  },

  loadItems() {
    this.trigger({ 
      loading: true
    });
  },

  loadItemsSuccess(items) {
    this.items = items;

    this.trigger({ 
      items : this.items,
      loading: false
    });
  },

  loadItemsError(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  },

  loadMapData() {
    this.trigger({
      loading: false
    });
  },

  loadMapDataSuccess(data) {
    this.data = data;
    this.trigger({
      data : this.data,
      loading: false
    });
  }


});

export default HouseStore;
