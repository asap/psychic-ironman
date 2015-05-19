'use strict';

angular.module('dasApp')
  .controller('PersonController', function ($scope, Person) {
    this.person = $scope.person = new Person('Ben');
});
