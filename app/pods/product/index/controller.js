import Ember from 'ember';

export default Ember.Controller.extend({
	ajax: Ember.inject.service('ajax'),
	imagesuggestions: Ember.A(),
	actions: {
		toggleSearch (terms) {
			this.set('imagesuggestions', null);
			this.set('search', terms);
			this.get('ajax')
				.request('/imagesuggestions?terms=' + terms)
				.then((content) => {
					console.log(content)
					this.set('imagesuggestions', Ember.A(content));
					// this.rerender()
				}).catch(function(error) {
					alert(error.message);
				});
		}
	}	
});
