describe('Person', function () {

  var Person;

  beforeEach(module('dasApp'));
  beforeEach(inject(function (_Person_) {
    Person = _Person_;
  }));

  describe('Constructor', function () {
    it('should assign a name', function () {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    }); 
  });

});
