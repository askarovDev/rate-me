import Route from '@ember/routing/route';

export default class CategoriesRoute extends Route {
    model({ value }) {
        return this.store.queryRecord('category', { value }).then(category => {
            return this.store.query('service', { category_id: category.id });
        });
    }

    setupController(controller, model) {
        super.setupController(...arguments);
    }
}


