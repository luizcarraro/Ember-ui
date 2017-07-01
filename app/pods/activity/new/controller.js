import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save(model) {
			model.save().then(() => {
				this.transitionToRoute('activity')
			});
		},
		cancel() {
			this.transitionToRoute('activity')
		}
	}
});
