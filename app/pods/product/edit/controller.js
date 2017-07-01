import Ember from 'ember';
import SwalError from 'procurava-admin/utils/swal-error';

export default Ember.Controller.extend({
	disabledSelectSubcategory: true,
	actions: {
		save: function() {
			var model = this.get('model');
			var price = model.get('price');
			console.log('input: ', price);
			price = price.replace(',','.');
			console.log('Replaced: ', price )
			model.set('price', price);
			console.log('On model data: ', model.get('price'));
			model.set('paymentMethods', this.get('selectedPaymentMethods'));

			model.save().then(() => {
				this.transitionToRoute('product');
			})
				.catch(SwalError);
		},

		setCategory: function(category) {
			var model = this.get('model');
			model.set('category', category);
			console.log(category.name);

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
			console.log('subcategory', subcategory);
		},
		cancel: function  () {
			this.get('model').rollbackAttributes();
			this.transitionToRoute('product');
		}
	}
});
