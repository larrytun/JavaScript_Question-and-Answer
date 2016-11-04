import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        avatar: this.get('avatar'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
      this.set('title', "");
      this.set('author', "");
      this.set('date', "");
      this.set('content', "");
      this.set('avatar', "");
    }
  }
});
