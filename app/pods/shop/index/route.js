import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return Ember.RSVP.hash({
      // shops: this.store.findAll('shop'),
      // cities: this.store.findAll('city')
    });
	},
	actions: {
    editCity(shop) {
      shop.set('isCityEditing', true);
    },

    cancelCityEdit(shop) {
      shop.set('isCityEditing', false);
      shop.rollbackAttributes();
    },

    saveCity(city, shop) {
      // Setup the new relation
      shop.set('city', city);
      shop.save();
      shop.set('isCityEditing', false);
    },
	}
});
