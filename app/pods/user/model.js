import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	firstName: attr('string'),
	lastName: attr('string'),
	phone: attr('string'),
	email: attr('string'),
	shop: belongsTo('shop'),
	lastAccess: attr('date')
});
