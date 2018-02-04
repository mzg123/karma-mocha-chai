//var assert = require('assert');
var assert = chai.assert;
describe('Array', function(){
    describe('indexOf', function(){
        it('不存在的时候返回-1', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
        it('1 + 1 是否等于2', function() {
           assert.equal(1+1, 2);
        });
        it('2 + 3 =5', function(){
           assert.equal(add(2,3),5);
        });
        it('2 - 3 =5', function(){
           assert.equal(dele(2,3),5);
        });
    });
});
