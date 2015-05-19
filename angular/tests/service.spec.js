'use strict';

describe('Person', function () {

  var Person, visitor, $httpBackend;

  beforeEach(module('dasApp'));
  beforeEach(module(function ($provide) {
    visitor = {};
    $provide.value('visitor', visitor);
  }));

  beforeEach(inject(function (_Person_, _$httpBackend_) {
    Person = _Person_;
    $httpBackend = _$httpBackend_;
  }));

  describe('Constructor', function () {
    it ('should assign a name', function () {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    }); 
  });

  describe ('#create', function () {
    it ("should create a person on the server", function () {
      $httpBackend
        .expectPOST('/people', {
          name: 'Ben'
        })
        .respond(200);

      var succeeded;
      new Person('Ben').create()
        .then(function () {
          succeeded = true;
        });
      $httpBackend.flush();
      expect(succeeded).to.be.true;
    });
  });

  describe('#greet', function () {
    it ("should greet UK visitors formally", function () {
      visitor.country = 'UK';
      expect(new Person('Nigel').greet()).to.equal('Good day to you, Nigel.');
    });

    it ("should greet other visitors informally", function () {
      expect(new Person('Ben').greet()).to.equal('Hey Ben!');
    });
  });

});
