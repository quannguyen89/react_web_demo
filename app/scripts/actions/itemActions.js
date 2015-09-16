import Reflux from 'reflux';
import $ from 'jquery';
var ItemActions = Reflux.createActions([
  'loadItems',
  'loadItemsSuccess',
  'loadItemsError',
  'loadHouseDetail',
  'loadHouseDetailSuccess',
  'closeDetail'
]);

ItemActions.loadItems.preEmit = function(data){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  // Need to define api with port 1221
  $.getJSON('http://localhost:8080/house', null, ItemActions.loadItemsSuccess);
};

ItemActions.loadHouseDetail.preEmit = function(data){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  $.getJSON('http://localhost:8080/house?id=1', null, ItemActions.loadHouseDetailSuccess);
};

export default ItemActions;
