import Ember from "ember";

export default Ember.Component.extend({

  tagName: 'select',
  classNames: ['form-control'],
  cities: [],
  shop: null,

  change(event) {
    const selectedId = event.target.value;
    const selectedModel = this.get('options').find((record) => record.id === selectedId);

    if(this.get('action')) // If there is an aaction to be called, call it
    	this.sendAction('action', selectedModel, this.get('model'));
    else // Set the model sent to change
    	this.set('model', selectedModel)
  }
});