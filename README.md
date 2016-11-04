# Question-and-answer

This is my 3rd JavaScript solo project for Epicodus.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <"https://github.com/larrytun/Question-and-Answer">` this repository
* change into the new directory
* `npm install`
* `bower install`
* `ember install ember-moment`
* `ember install ember-bootstrap`


## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

### Specs

| Behavior | Input Ex. | Output Ex. |
| --- | --- | --- |
| It can save a question including the username, title, date, content, and avatar | Username: Larry, Title: Why is the sky blue, Date: July 15th 2016, Content: Why is the sky blue? Please tell me. Avatar: "pic.url"  | Why is the sky blue by Larry |
| It can save answers to questions including the username and answer content | Name: Joe, Answer: It just is | It just is - by Joe |
| A user can edit questions | Title: Why is the ocean blue? | Why is the ocean blue by Larry |
| A user can edit answers | Name: Joe Jackson | It just is - by Joe Jackson |
| A user can delete questions | Why is the sky blue by Larry | (deleted) |


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
