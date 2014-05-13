/*global describe, beforeEach, it */
'use strict';
var assert = require("assert");
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('atomapp generator', function () {

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('atomapp:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      'Gruntfile.js',
      'bower.json',
      'package.json',
      '.bowerrc',
      '.gitignore',
      'app/main.js',
      'app/index.html',
      'app/package.json',
      'app/scripts/app.js'
    ];

    helpers.mockPrompt(this.app, {
      'appName': 'AtomApp',
      'atomShellVersion': '0.12.4'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
