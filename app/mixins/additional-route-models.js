import Ember from 'ember';

export default Ember.Mixin.create({
  /**
   * the main hook: override to return a hash of models to set on the controller
   * @param model
   * @param transition
   * @param queryParams
   */
  additionalModels: function() {},

  // returns a promise that will resolve once all additional models have resolved
  initializeAdditionalModels: function(model, transition, queryParams) {
    var models, promise;
    models = this.additionalModels(model, transition, queryParams);
    if (models) {
      promise = Ember.RSVP.hash(models);
      this.set('_additionalModelsPromise', promise);
      return promise;
    }
  },

  // copies the resolved properties onto the controller
  setupControllerAdditionalModels: function(controller) {
    var modelsPromise;
    modelsPromise = this.get('_additionalModelsPromise');
    if (modelsPromise) {
      modelsPromise.then(function(hash) {
        controller.setProperties(hash);
      });
    }
  },

  // hook to resolve the additional models -- blocks until resolved
  afterModel: function(model, transition, queryParams) {
    return this.initializeAdditionalModels(model, transition, queryParams);
  },

  // hook to copy the models onto the controller
  setupController: function(controller, model) {
    this._super(controller, model);
    this.setupControllerAdditionalModels(controller);
  }
});
