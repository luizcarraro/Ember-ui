import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  icon: DS.attr('string'),
  products: DS.hasMany('product'),
  subcategories: DS.hasMany('subcategory')
});
