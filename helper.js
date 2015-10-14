var browser = {};
var element = function () {
};

module.exports = {
    available: function () {
        return true;
    },
    init: function (thatBrowser, thatElement) {
        browser = thatBrowser;
        element = thatElement;
        browser.get('/protractor-demo/');
    },
    getTitle: function () {
        return browser.getTitle();
    },
    add: function (a, b) {
        var firstNumber = element(by.model('first'));
        var secondNumber = element(by.model('second'));
        var goButton = element(by.id('gobutton'));
        var latestResult = element(by.binding('latest'));

        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
        return latestResult.getText();
    },
    history: function() {
        return element.all(by.repeater('result in memory'));
    }
};