import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
    sortBy: 'rank',
    serviceSorting: computed('sortBy', function() {
        return [`${this.sortBy}:asc`];
    }),
    sortedServices: sort('model', 'serviceSorting'),

    actions: {
        changeSort(sort) {
            this.set('sortBy', sort)
        }
    }
});
