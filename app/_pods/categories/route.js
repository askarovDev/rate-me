import Route from '@ember/routing/route';
const list = [
    {score: 10, title: 'ember-simple-auth', desc: '- A lightweight library for implementing authentication/authorization with Ember.js applications.', category: 'table', rank: '1'},
    {score: 7.5, title: 'torii', desc: '- A set of clean abstractions for authentication in Ember.js', category: 'authentication', rank: '2'},
    {score: 7.5, title: 'ember-cognito-identity', desc: '- Interact with AWS Cognito from your Ember app.', category: 'table', rank: '3'},
    {score: 6.9, title: '@bagaar/ember-permissions ', desc: '- Permission management for Ember applications.',  category: 'authentication', rank: '4'},
    {score: 6.3, title: 'ember-simple-authspree-ember-auth ', desc: '- Authentication for a Spree Ember Application.',  category: 'validation', rank: '5'}
]
export default class CategoriesRoute extends Route {
    async model({slug}) {
        return list.filter((item) => item.category === slug);
    } 
}


