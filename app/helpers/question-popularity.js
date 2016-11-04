import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<div class="hot"><img src="../img/chili.png" height="50" width="50"><h10>Hot!</h10></div>');
  }
}

export default Ember.Helper.helper(questionPopularity);
