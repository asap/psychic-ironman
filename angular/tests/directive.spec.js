describe("Welcome Directive", function () {
  var element, scope;

  beforeEach(module('dasApp'));
  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile("<welcome person='person'></welcome>")(scope);
  }));

  it ('should welcome the person', function () {
    scope.person =  {
      greet: function () {
        return 'Hello!';
      }
    };
    scope.$digest();
    expect(element.find('span').text()).to.equal("Hello! Welcome to the app!");
  });

  it ("should display the person's favorite color on hover", function () {
    scope.person = {
      greet: function () {
        return 'Hello!';
      },
      favoriteColor: 'blue'
    };
    scope.$digest();
    element.triggerHandler('mouseenter');
    expect(element.css('color')).to.equal('blue');
    element.triggerHandler('mouseleave');
    expect(element.css('color')).to.be.empty;
  });
});
