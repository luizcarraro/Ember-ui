import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  didRender() {
    Ember.$( ".input-value" )
      .mouseenter(function() {
        $( this ).find( "i" ).css( "display", "inline-block" );
      })
      .mouseleave(function() {
        $( this ).find( "i" ).css( "display", "none" );
      });
  },
	actions: {
    edit(model) {
      this.set('isEditing', true);
    },

    cancel(model) {
      this.set('isEditing', false);
      model.rollbackAttributes();
    },

    save(model) {
      if (model.get('isNotValid')) {
        return;
      }

      this.set('isEditing', false);
      model.save();
    }		
	}
});
