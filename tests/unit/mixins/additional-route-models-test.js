import Ember from 'ember';
import AdditionalRouteModelsMixin from '../../../mixins/additional-route-models';
import { module, test } from 'qunit';

module('Unit | Mixin | additional route models');

// Replace this with your real tests.
test('it works', function(assert) {
  let AdditionalRouteModelsObject = Ember.Object.extend(AdditionalRouteModelsMixin);
  let subject = AdditionalRouteModelsObject.create();
  assert.ok(subject);
});
