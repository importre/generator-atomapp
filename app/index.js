'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var AtomAppGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic AtomApp generator.'));

    var prompts = [
      {
        name: 'appName',
        message: 'What is your app name?',
        default: (this.appName) ? this.appName : 'MyAtomApp'
      },
      {
        name: 'atomShellVersion',
        message: 'atom-shell version',
        default: (this.atomShellVersion) ? this.atomShellVersion : '0.14.0'
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.atomShellVersion = props.atomShellVersion;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');

    this.directory('app', 'app');
    this.template('app/package.json', 'app/package.json', this);

    this.template('Gruntfile.js', 'Gruntfile.js', this);
    this.template('_package.json', 'package.json', this);
    this.template('_bower.json', 'bower.json', this);
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('bowerrc', '.bowerrc');
  }
});

module.exports = AtomAppGenerator;
