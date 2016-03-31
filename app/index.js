var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var GalvanizeSeanGenerator = yeoman.generators.Base.extend({

  promptUser: function() {
    // greeting
    console.log(chalk.magenta("Welcome to Galvanize's SEAN Stack Generator"));
  },

  createApp: function(){
    this.copy('./src/client/app/app.js', './src/client/app/app.js');
    this.copy('./src/client/app/index.html', './src/client/app/index.html');
    this.copy('./src/client/app/example_component/views/component.html', './src/client/app/example_component/views/component.html');
    this.copy('./src/client/app/example_component/controllers.js', './src/client/app/example_component/controllers.js');
    this.copy('./src/client/js/main.js', './src/client/js/main.js');
    this.copy('./src/client/css/main.css', './src/client/css/main.css');
    this.copy('./src/server/bin/www', './src/server/bin/www');
    this.copy('./src/server/routes/index.js', './src/server/routes/index.js');
    this.copy('./src/server/app.js', './src/server/app.js');
    this.copy('package.json');
    this.copy('_gitignore', '.gitignore');
    this.copy('gulpfile.js', 'gulpfile.js');
  },

});

module.exports = GalvanizeSeanGenerator;
