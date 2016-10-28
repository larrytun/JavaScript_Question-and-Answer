import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer(params){
      this.sendAction('saveAnswer', params);
  },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },
    update(answer, params) {
      console.log(answer);
      console.log(params);
      this.sendAction('update', answer, params);
    }
  }
});
