// app/services/ajax.js

import AjaxService from 'ember-ajax/services/ajax';
import environment from 'ember-ui/config/environment';

export default AjaxService.extend({
  host: environment.apiBaseUrl,
  session: Ember.inject.service(),
  headers: Ember.computed('session.session.content.authenticated.token', {
    get() {
      let headers = {};
      const authToken = this.get('session.session.content.authenticated.token');
      if (authToken) {
        headers['Authorization'] = 'Bearer ' + authToken;
      }
      return headers;
    }
  })
});
