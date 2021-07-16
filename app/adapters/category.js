import ApplicationAdapter from 'rate-me/adapters/application';

export default ApplicationAdapter.extend({
  queryRecord(store, type, query) {
    return this.findRecord(store, type, query.value);
  }
});
