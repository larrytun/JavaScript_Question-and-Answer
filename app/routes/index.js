import Ember from 'ember';

var questions = [{
  id: 1,
  title: "What is two plus two?",
  author: "Little Mikey",
  date: "October 28th, 2016",
  content: "I have big math quiz coming up soon. I really need help figuring out this one question. What is two plus two?",
  avatar: "http://avatarfiles.alphacoders.com/574/574.jpg"
}, {
  id: 2,
  title: "How do you tie a tie?",
  author: "Bob Johnson",
  date: "October 29th, 2016",
  content: "I have a job interview. Could somebody help me learn how to tie a tie?",
  avatar: "http://avatarfiles.alphacoders.com/637/63783.jpg"
}, {
  id: 3,
  title: "Why do my parents hate me?",
  author: "Sammy Slater",
  date: "October 30th, 2016",
  content: "I just feel like my parents hate me. They force me to go to school and never let me drink Mt.Dew",
  avatar: "http://avatarfiles.alphacoders.com/636/63686.jpg"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  }
});
