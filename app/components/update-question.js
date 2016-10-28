import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        avatar: this.get('avatar'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
