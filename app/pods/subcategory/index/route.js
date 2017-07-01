import Ember from 'ember';
import AdditionalRouteModels from 'ember-ui/mixins/additional-route-models';

export default Ember.Route.extend(AdditionalRouteModels,{
	limit: 10,
	additionalModels () {
		return {
			// categories: this.store.findAll('category')
		}
	},
	model(){
		let page = this.get('page') || 1;
		let limit = this.get('limit');
		// return this.store.query('subcategory',{ skip: (page-1) * limit, limit: 10 })
	},
	actions: {
		changePage (page) {
			this.set('page', page);
			this.refresh()
		},
		/* EDIÇÃO DO NOME */
    editName(subcategory) {
      subcategory.set('isEditingName', true);
    },
    cancelNameEdit(subcategory) {
      subcategory.set('isEditingName', false);
      subcategory.rollbackAttributes();
    },
    saveName(subcategory) {
      if (subcategory.get('isNotValid')) {
        return;
      }

      subcategory.set('isEditingName', false);
      subcategory.save();
    },
		/* EDIÇÃO DA CATEGORIA */
		editCategory(shop) {
      shop.set('isCategoryEditing', true);
    },
    cancelCategoryEdit(shop) {
      shop.set('isCategoryEditing', false);
      shop.rollbackAttributes();
    },
    saveCategory(city, shop) {
      // Setup the new relation
      shop.set('category', city);
      shop.save();
      shop.set('isCategoryEditing', false);
    },
	}
});
