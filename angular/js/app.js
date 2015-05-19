angular.module('dasApp', [])
  .factory('Person', function () {
    return function Person (name) {
      this.name = name;
    };
  })
;

console.info("loaded app");
