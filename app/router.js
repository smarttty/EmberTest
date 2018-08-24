import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('semestrs-list',{path:'/semestrs'});
});

export default Router;
