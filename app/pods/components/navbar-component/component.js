import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	didRender() {
		Ember.$('#side-menu').metisMenu();
	},
	actions: {
		logout() {
			this.get('session').invalidate();
		}
	}
});
