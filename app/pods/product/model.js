import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr(),
  type: DS.attr('string'),
  nameSlug: DS.attr('string'),
  shop: DS.belongsTo('shop'),
  category: DS.belongsTo('category'),
  subcategory: DS.belongsTo('subcategory'),
  hidePrice: DS.attr('boolean'),
  visible: DS.attr('boolean'),
  city: DS.attr('string'),
});
