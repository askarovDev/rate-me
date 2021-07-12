import Controller from '@ember/controller';

export default Controller.extend({
  categories: [
    { name: 'Avto yuvish', class: '0'},
    { name: 'Avto servis', class: '1'},
    { name: 'Avto tuning', class: '2'},
    { name: 'Avto zapchast', class: '3'},
    { name: 'Avto atelye', class: '4'}
  ]
});
