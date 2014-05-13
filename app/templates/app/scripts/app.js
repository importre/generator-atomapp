'use strict';

var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.title = '<%= appName %>';
  $scope.greeting = 'Hola!';
}]);
