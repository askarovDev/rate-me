import Route from '@ember/routing/route';

export default class CompanyRoute extends Route {
    model({ id }) {
        return this.store.findRecord('company', id);
    }
}
