import { moduleForModel, test } from 'ember-qunit';

moduleForModel('product/index', 'Unit | Model | product/index', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
