var expect = chai.expect;
describe('单元测试', function(){
    describe('计算类测试', function(){
        it('add方法结果不对', function(){
           expect(add(1,1)).to.equal(2);
        });
        it('substract方法结果不对', function(){
           expect(substract(2,1)).to.equal(1);
        });
        it('multiply方法结果不对', function(){
           expect(multiply(9,9)).to.equal(81);
        });
        it('divide方法结果不对', function(){
           expect(divide(9,3)).to.equal(3);
        });
    });
});
