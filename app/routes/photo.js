import Ember from 'ember';

export default Ember.Route.extend({

  model() {
  // return this.get('store').findAll('photo');
  return [{
      id: 1,
      link: 'https://i.imgur.com/sMTZRva.png',
      fullRef: "<img src='https://i.imgur.com/sMTZRva.png' width='100%' height='100%'/>",
    }, {
      id: 2,
      link: 'https://i.imgur.com/u4g8tKK.png',
      fullRef: "<img src='https://i.imgur.com/u4g8tKK.png' width='100%' height='100%'/>",
    }, {
      id: 3,
      link: 'https://i.imgur.com/eBCgsuO.png',
      fullRef: "<img src='https://i.imgur.com/eBCgsuO.png' width='100%' height='100%'/>",
    }];
  }
});
