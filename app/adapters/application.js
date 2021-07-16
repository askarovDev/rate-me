import ENV from 'hubba-front-v3/config/environment';
import { computed } from '@ember/object';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default class ApplicationAdapter extends JSONAPIAdapter.extend(DataAdapterMixin) {
  host = ENV.API.host;
  namespace = ENV.API.apiNamespace;

  useFetch = true;

  @computed('session.data.authenticated.token')
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return headers;
  }

  normalizeErrorResponse(status, headers, payload) {
    if (payload.errors && !Array.isArray(payload.errors)) {
      return [payload.errors];
    } else {
      return this._super(...arguments);
    }
  }

  pathForType(type) {
    return underscore(pluralize(type));
  }
}
