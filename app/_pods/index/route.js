import Route from '@ember/routing/route';

export default class CategoriesRoute extends Route {
    beforeModel() {
        this.transitionTo('main');
    }
}


