import DS from 'ember-data';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	city: 			DS.belongsTo('city'),
	products: 	DS.hasMany('product'),
	legalName: 	DS.attr('string'),
	cnpj: 			DS.attr('string'),
	email: 			DS.attr('string'),
	address: 		DS.attr('string'),
	phone: 			DS.attr('string'),
	cellphone: 	DS.attr('string'),
	owner: 			DS.belongsTo('user'),
	activities: DS.hasMany('activity')
});