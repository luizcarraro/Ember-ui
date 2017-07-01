import Ember from 'ember';
// import AdditionalRouteModels from 'procurava-admin/mixins/additional-route-models';

export default Ember.Route.extend(/*AdditionalRouteModels, */{
	limit: 10,
	model(){
		let page = this.get('page') || 1;
		let limit = this.get('limit');
		// return this.store.query('city',{ skip: (page-1) * limit, limit: 10 })
	},
	actions: {
		changePage (page) {
			this.set('page', page);
			this.refresh()
		}
	}
});
