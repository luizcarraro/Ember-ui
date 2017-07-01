import Ember from 'ember';

export default Ember.Route.extend(/*AdditionalRouteModels, */{
	limit: 10,
	model(){
		let page = this.get('page') || 1;
		let limit = this.get('limit');
		// return this.store.query('user',{ skip: (page-1) * limit, limit: 10 })
	},
	actions: {
		changePage (page) {
			this.set('page', page);
			this.refresh()
		},
		/* EDIÇÃO DO NOME */
    editName(model) {
      model.set('isEditingName', true);
    },
    cancelNameEdit(model) {
      model.set('isEditingName', false);
      model.rollbackAttributes();
    },
    saveName(model) {
      if (model.get('isNotValid')) {
        return;
      }
      model.set('isEditingName', false);
      model.save();
    }
	}
});
