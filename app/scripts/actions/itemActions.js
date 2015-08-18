import Reflux from 'reflux';

var ItemActions = Reflux.createActions([
  'loadItems',
  'loadItemsSuccess',
  'loadItemsError',
  'loadHouseDetail',
  'loadHouseDetailSuccess'
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

ItemActions.loadHouseDetail.preEmit = function(data){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(function(){
    var houseDetail = {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
      publishFrom: 104,
      thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
      location: [21.009326, 105.857682],
      photos: [
        'http://photos1.zillowstatic.com/p_h/IS9tsmiolp6hev1000000000.jpg',
        'http://photos2.zillowstatic.com/p_h/IS1nqa0ihhyjev1000000000.jpg',
        'http://photos3.zillowstatic.com/p_h/IStgoyhbd9qmev1000000000.jpg',
        'http://photos1.zillowstatic.com/p_h/ISlammz491ipev1000000000.jpg',
        'http://photos1.zillowstatic.com/p_h/IS9hr1kevjvkkl0000000000.jpg',
        'http://photos1.zillowstatic.com/p_h/IS1rxujhu5v30o1000000000.jpg',
        'http://photos1.zillowstatic.com/p_h/ISp1utk34801pv1000000000.jpg',
        'http://photos3.zillowstatic.com/p_h/IShvvoa7kf49w70000000000.jpg',
        'http://photos2.zillowstatic.com/p_h/ISphqpbkrfi2oe0000000000.jpg',
        'http://photos2.zillowstatic.com/p_h/IShzafgq64f3ka0000000000.jpg',
        'http://photos3.zillowstatic.com/p_h/IS9t83yj2w66ka0000000000.jpg',
        'http://photos3.zillowstatic.com/p_h/ISx7sev6epwv2j0000000000.jpg',
        'http://photos2.zillowstatic.com/p_h/ISp5xaj1u5nbev1000000000.jpg'
      ],
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
      contactAgents: [
        {
          name: 'Michael Dreyfus',
          phone: '(650) 644-3474',
          averageRating: 4.7,
          numRates: 32,
          avatar: 'http://photos1.zillowstatic.com/h_n/ISptj0herzprn40000000000.jpg',
          recentSales: 44
        },
        {
          name: 'Katy Thielke Straser',
          phone: '(650) 941-8003',
          averageRating: 4.9,
          numRates: 24,
          avatar: 'http://photos2.zillowstatic.com/h_n/IS-1h1vglrnwo5el.jpg',
          recentSales: 33
        },
        {
          name: 'Karishma & Deepak Chandani',
          phone: '(650) 941-8003',
          averageRating: 4.6,
          numRates: 31,
          avatar: 'http://photos1.zillowstatic.com/h_n/IS1fw1nb6twj6i1000000000.jpg',
          recentSales: 49
        }
      ]

    };
    ItemActions.loadHouseDetailSuccess(houseDetail);

    // on error
    // ItemActions.loadItemsError('an error occured');
  },800);
};


var housesData = [
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
    location: [21.009326, 105.857682]
  },
  {
    address: '1565 Webster St,  Hanoi, Vietnam',
    type: 'House for sale',
    price: 6950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 200,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg',
    location: [21.009356, 105.855442]
  },
  {
    address: '1061 Alma Street, Hanoi, Vietnam',
    type: 'Make me move',
    price: 5500000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 222,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg',
    location: [21.011072, 105.842455]
  },
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
    location: [21.027816, 105.852268]
  },
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg',
    location: [21.054544, 105.820344]
  },
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg',
    location: [21.042675, 105.791481]
  },
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
    location: [21.028501, 105.782255]
  },
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg',
    location: [21.028309, 105.790856]
  },
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
    location: [21.027705, 105.811117]
  },
  {
    address: '589 Coleridge Ave, Hanoi, Vietnam',
    type: 'House for sale',
    price: 8950000,
    properties: ['3 bds', '3.5 ba', '4464 sqft', '0.28 ac lot', 'Built 1997'],
    publishFrom: 104,
    thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg',
    location: [21.019992, 105.814706]
  }
];
export default ItemActions;
