import Ember from 'ember';

export default Ember.Controller.extend({
  collection: [
    'https://i.imgur.com/sMTZRva.png',
    'https://i.imgur.com/u4g8tKK.png',
    'https://i.imgur.com/eBCgsuO.png',
    'https://i.imgur.com/Cj9hwmP.png',
    'https://i.imgur.com/5kFLnK5.png',
    'https://i.imgur.com/1Btjrot.png',
    'https://i.imgur.com/x9xNpiM.png',
    'https://i.imgur.com/dOMVSVu.png',
  ],

  idCount: 0,

  photoRef: 'https://i.imgur.com/sMTZRva.png',

  actions: {
    nextPhoto: function() {
      this.idCount++;
      let x = this.idCount;

      if (this.idCount <= 7) {
        this.set('photoRef', this.collection[x]);
      }

      else {
        this.set('idCount', 0);
        this.set('photoRef', this.collection[0]) 
      }
    }
  }
});
