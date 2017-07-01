import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path: '/'});
  this.route('login');
  this.route('user', function() {});
  this.route('shop', function() {});
  this.route('category', function() {
    this.route('products');
    this.route('new');
  });
  this.route('product', function() {
    this.route('new');
    this.route('edit', {path: ':id'});
  });
  this.route('city', function() {
    this.route('new');
  });
  this.route('activity', function() {
    this.route('new');
  });
  this.route('subcategory', function() {
    this.route('new');
  });
  this.route('searches');
});

export default Router;
