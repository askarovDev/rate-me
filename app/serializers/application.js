import JSONAPISerializer from '@ember-data/serializer/json';
import { assign } from '@ember/polyfills';

export default class SessionSerializer extends JSONAPISerializer {
  serializeIntoHash(hash, type, record, options) {
    assign(hash, this.serialize(record, options));
  }
  normalizeResponse(store, primaryModelClass, payload) {
    payload.token = payload.data.attributes.token;
    payload.id = payload.data.id;
    payload.userId = payload.data.relationships.user.data.id;
    return super.normalizeResponse(...arguments);
  }
}
