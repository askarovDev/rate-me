import Route from '@ember/routing/route';
const list= [
    {id: '1',title: 'ember-cli-babel', desc: 'Ember CLI addon for Babel', category: 'Build tools', rank: '1'},
    {id: '2',title: 'ember-cli-typescript', desc: 'Allow ember apps to use typescript files.', category: 'Build tools', rank: '2'},
    {id: '3', title: '@ember/test-helpers', desc: 'Helpers for testing Ember.js applications', category: 'Testing', rank: '3'}
    
]

export default class ServiceRoute extends Route {
    async model({id}) {
        return list.find((item) => item.id === id)
    } 
}
