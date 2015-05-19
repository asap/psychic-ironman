'use strict';

angular.module('dasApp')
  .factory('visitor', function () {
  // Tutorial assumes visitor is a thing, but we're faking this for now
    return {};
  })
  .factory('Person', function (visitor, $http) {
    return function Person (name) {
      this.name = name;
      this.greet = function () {
        if (visitor.country === 'UK') {
          return 'Good day to you, ' + this.name + '.';
        } else {
          return 'Hey ' + this.name + '!';
        }
      }; 
      this.create = function () {
        return $http.post('/people', this);
      };
    };
  })
;
