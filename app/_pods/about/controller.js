import Controller from '@ember/controller';

export default Controller.extend({
  categories: [
    { name: 'Avto yuvish', class: '2'},
    { name: 'Avto servis', class: '3'},
    { name: 'Avto tuning', class: '5'},
    { name: 'Avto zapchast', class: '0'},
    { name: 'Avto atelye', class: '1'}
  ]
});
