import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<img src="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4" height="50" width="50">');
  }
}

export default Ember.Helper.helper(questionPopularity);
