var expect = require('chai').expect;

var pascal = require('./pascal.js');

describe('pascal', function(){
  it('should have the correct output when given 5', function(){
    var solution = [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1];
    expect(pascal(5)).to.deep.equal(solution);
  });
});