import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ajax');
  this.route('color');
  this.route('yielding');
  this.route('tasks');
  this.route('async-iterator');
  this.route('music');
});

export default Router;
