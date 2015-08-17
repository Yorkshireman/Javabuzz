describe('Javabuzz', function() {
  var javabuzz;
  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleBy(3, 3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleBy(4, 3)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleBy(5, 5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleBy(11, 5)).toBe(false);
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3 AND 5', function(){
      expect(javabuzz.isDivisibleBy(15, 15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleBy(10, 15)).toBe(false);
    });
  });
});