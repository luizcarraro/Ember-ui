import Ember from 'ember';
import AdditionalRouteModels from 'ember-ui/mixins/additional-route-models';

export default Ember.Route.extend(AdditionalRouteModels,{
	// additionalModels() {
	// 	return {
	// 		shops: this.store.findAll('shop'),
	// 		categories: this.store.findAll('category')
	// 	};
	// },
	model() {
		return this.store.createRecord('product');
	},
  deactivate: function() {
    var model = this.controllerFor('product.new').get('model');
    if( model.get('dirtyType') === 'created'){
    	model.destroyRecord();
    }
  },

	actions: {
		save(model) {
			model.save().then(() => {
				console.log(model)
				this.controllerFor('product')
					.transitionToRoute('product.edit', model.id);
			});
		}
	}
});
