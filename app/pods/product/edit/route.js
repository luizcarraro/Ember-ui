import Ember from 'ember';
import AdditionalRouteModels from 'ember-ui/mixins/additional-route-models';

export default Ember.Route.extend(AdditionalRouteModels,{
	additionalModels() {
		return {
			categories: this.store.findAll('category')
		};
	},
	model(params) {
		return this.store.findRecord('product', params.id);
	}
});
