import Reflux from 'reflux';

var ItemActions = Reflux.createActions([
  'loadItems',
  'loadItemsSuccess',
  'loadItemsError',
  'loadMapData',
  'loadMapDataSuccess'
]);

ItemActions.loadItems.preEmit = function(data){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(function(){
    var items = housesData;
    ItemActions.loadItemsSuccess(items);

    // on error
    // ItemActions.loadItemsError('an error occured');
  },500);
};

ItemActions.loadMapData.preEmit = function(query) {
  setTimeout(function(){
    var data = [[21.009326, 105.857682], [21.009356, 105.855442], [21.011072, 105.842455],
      [21.027816, 105.852268], [21.054544, 105.820344], [21.042675, 105.791481],
      [21.028501, 105.782255], [21.028309, 105.790856], [21.027705, 105.811117],
      [21.019992, 105.814706]
    ];
    ItemActions.loadMapDataSuccess(data);

    // on error
    // ItemActions.loadItemsError('an error occured');
  },600);
};


var housesData = [
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg'
  },
  {
    address: '1565 Webster St, Pablo Alto, CA',
    type: 'House for sale',
    price: 6950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 200,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg'
  },
  {
    address: '1061 Alma Street, Palo Alto, CA',
    type: 'Make me move',
    price: 5500000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 222,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg'
  },
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg'
  },
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg'
  },
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg'
  },
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg'
  },
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg'
  },
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg'
  },
  {
    address: '589 Coleridge Ave, Palo Alto, CA',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg'
  }
];
export default ItemActions;
