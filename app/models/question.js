import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
  avatar: DS.attr(),
  // answers: DS.hasMany('answer', {async:true})
});
