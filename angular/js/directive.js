'use strict';

angular.module('dasApp')
  .directive('welcome', function () {
    return {
      restrict: 'E',
      scope: {
        person: '='
      },
      template: '<span>{{person.greet()}} Welcome to the app!</span>',
      link: function (scope, element) {
        var original = element.css('color');
        element.on('mouseenter', function () {
          element.css('color', scope.person.favoriteColor);
        });
        element.on('mouseleave', function () {
          element.css('color', original);
        });
      }
    };
});
