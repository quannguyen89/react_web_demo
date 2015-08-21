import Reflux from 'reflux';
import ItemActions from '../actions/itemActions';
import _ from 'lodash';
var HouseStore = Reflux.createStore({

  init() {
    this.items = [];

    this.listenTo(ItemActions.loadItems, this.loadItems);
    this.listenTo(ItemActions.loadItemsSuccess, this.loadItemsSuccess);
    this.listenTo(ItemActions.loadItemsError, this.loadItemsError);
    this.listenTo(ItemActions.loadHouseDetail, this.loadHouseDetail);
    this.listenTo(ItemActions.loadHouseDetailSuccess, this.loadHouseDetailSuccess);
    this.listenTo(ItemActions.closeDetail, this.closeDetail);
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

  loadHouseDetail() {
    this.trigger({
      loadingHouseDetail: true
    });
  },

  loadHouseDetailSuccess(houseDetail) {
    this.houseDetail = houseDetail;
    this.trigger({
      loadingHouseDetail: false,
      houseDetail
    });
  },

  closeDetail() {
    this.houseDetail = null;
    this.trigger({
      items : this.items,
      loading: false
    });
  }
});

export default HouseStore;
