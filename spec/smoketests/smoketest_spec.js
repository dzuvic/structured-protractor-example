// smoke tests
var demoHelper = require('../../helper');
describe('Protractor Demo App', function () {
    beforeEach(function() {
        demoHelper.init(browser,element);
    });

    it('helper should be available', function () {
        expect(demoHelper.available()).toEqual(true);
    });

    it('should have a title', function () {
        browser.get('/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('helper should return the title', function() {
        expect(demoHelper.getTitle()).toEqual('Super Calculator');
    });
});
