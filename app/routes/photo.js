import Ember from 'ember';

export default Ember.Route.extend({

  model() {
  // return this.get('store').findAll('photo');
  return [{
      id: 1,
      link: 'https://i.imgur.com/sMTZRva.png',
    }, {
      id: 2,
      link: 'https://i.imgur.com/u4g8tKK.png',
    }, {
      id: 3,
      link: 'https://i.imgur.com/eBCgsuO.png',
    }, {
      id: 4,
      link: 'https://i.imgur.com/Cj9hwmP.png',
    }, {
      id: 5,
      link: 'https://i.imgur.com/5kFLnK5.png',
    }, {
      id: 6,
      link: 'https://i.imgur.com/1Btjrot.png',
    }, {
      id: 7,
      link: 'https://i.imgur.com/x9xNpiM.png',
    }, {
      id: 8,
      link: 'https://i.imgur.com/dOMVSVu.png',
    }];
  }
});
