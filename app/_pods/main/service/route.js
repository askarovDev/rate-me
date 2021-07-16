import Route from '@ember/routing/route';

export default class ServiceRoute extends Route {
    model({ id }) {
        return this.store.findRecord('service', id);
    } 
}
