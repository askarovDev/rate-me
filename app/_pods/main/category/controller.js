import Controller from '@ember/controller';
import { restartableTask } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';

export default class CategoryController extends Controller {
    @tracked categoryName;
    @tracked services = [];

    @restartableTask *fetchServices(id) {
        let query = {};
        this.services = [];

        query.category_id = id;

        let result = yield this.store.query('service', query);

        return this.services = result;
    }
}
