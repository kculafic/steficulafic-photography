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
    'https://i.imgur.com/CxTJn27.png',
    'https://i.imgur.com/oTNRUbq.png',
    'https://i.imgur.com/ZMCfv1W.jpg',
    'https://i.imgur.com/5OFZthk.png',
    'https://i.imgur.com/9FARfu4.png',
    'https://i.imgur.com/W85jP3A.png',
    'https://i.imgur.com/A96GLt1.png',
    'https://i.imgur.com/VpzW0uw.jpg',
    'https://i.imgur.com/6Ax77sp.png',
    'https://i.imgur.com/B22ExSd.jpg',
    'https://i.imgur.com/5WVmrBf.png',
    'https://i.imgur.com/ehbvbmU.png',
    'https://i.imgur.com/6qDyJPR.jpg',
    'https://i.imgur.com/VbOjWzy.png',
    'https://i.imgur.com/ZHb5Zgj.png',
    'https://i.imgur.com/CkpkSHq.png',
    'https://i.imgur.com/Z9jJCxF.png',
    'https://i.imgur.com/CJyzD2S.png',
    'https://i.imgur.com/GhTfE8G.png',
    'https://i.imgur.com/viOVYpp.png',
    'https://i.imgur.com/sI1kND7.png',
    'https://i.imgur.com/40Jm4XI.png',
    'https://i.imgur.com/7cn2jQ5.png',
    'https://i.imgur.com/y4qcph9.png',
    'https://i.imgur.com/B3G47tq.png',
    'https://i.imgur.com/GqJ5i8x.png',
    'https://i.imgur.com/GQ1Orhf.png',
    'https://i.imgur.com/1Xtw6ol.png',
    'https://i.imgur.com/HHCvYsa.png',
    'https://i.imgur.com/6FcQAQY.png',
    'https://i.imgur.com/JvOccOE.jpg',
    'https://i.imgur.com/Pkk9fvn.png'
  ],

  idCount: 0,

  photoRef: 'https://i.imgur.com/sMTZRva.png',

  actions: {
    nextPhoto: function() {
      this.idCount++;
      let x = this.idCount;

      if (this.idCount <= 39) {
        this.set('photoRef', this.collection[x]);
      }

      else {
        this.set('idCount', 0);
        this.set('photoRef', this.collection[0]);
      }
    }
  }
});
