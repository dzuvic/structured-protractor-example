var demoHelper = require('../../helper');
describe('Protractor Demo App', function () {
    beforeEach(function () {
        demoHelper.init(browser, element);
    });

    it('add 5 + 5 = 10', function () {
        expect(demoHelper.add(1, 2)).toEqual('3');
    });

    it('two additions in the history', function () {
        expect(demoHelper.add(5, 5)).toEqual('10');
        expect(demoHelper.add(1, 2)).toEqual('3');
        expect(demoHelper.history().count()).toEqual(2)
    });
});
