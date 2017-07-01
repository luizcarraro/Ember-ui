import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			var model = this.get('model');
			model.set('price', model.get('price').replace(',','.') );
			console.log(model.get('price'), 'Replaced: ', model.get('price').replace(',','.') )
			
			model.set('paymentMethods', this.get('selectedPaymentMethods'));

			model.save().then(() => {
				this.transitionToRoute('product.edit', model.id);
			})
				.catch(SwalError);
		},

		setCategory: function(category) {
			var model = this.get('model');
			model.set('category', category);
			this.store
				.query('subcategory', {
					category: category.get('id')
				})
				.then((content) => {
					model.set('subcategory', null);
					this.set('subcategories', content);
					this.set('disabledSelectSubcategory', false);
					this.set('subcategoryPlaceholder', "Manda bala");
				}).catch(function(error) {
					alert(error.message);
				});
		},
		setSubcategory: function(subcategory) {
			var model = this.get('model');
			model.set('subcategory', subcategory);
		},
		cancel: function  () {
			this.get('model').destroyRecord();
			this.transitionToRoute('product');
		}
	}
});
