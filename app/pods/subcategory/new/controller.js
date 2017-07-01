import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save(model) {
			model.save().then(() => {
				this.transitionToRoute('subcategory')
			});
		},
		cancel() {
			this.transitionToRoute('subcategory')
		},
		setCategory(category) {
			this.get('model').set('category', category);
		}
	}
});
