import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('photo', { path: '/photo' });
  this.route('video', { path: '/video' });
});

export default Router;
