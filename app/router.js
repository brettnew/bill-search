import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:keyword'});
  this.route('sns');
  this.route('guns');
});

export default Router;
