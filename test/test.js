var assert = require('assert')
var url = require('url')
var urlObj = url.parse('https://www.paypal.com?param1=value1&param2=value2');
testName = '';
serializer = require('mousse');


describe('Suite1', function() {
    describe('test1', function() {
        beforeEach(function (done) {
            // console.log('test name: ' + JSON.stringify(this));
            //console.log(serializer.serialize(this));
            //console.log(cObj.object.value.tests[1].title);
            var cObj = JSON.parse(serializer.serialize(this.test));
            console.log('running: ' + cObj.object3.value.title);
            done();
        });

        it('my first test', function () {
            this.someName = 'x';
            testName = 'iteration 1';
            assert.equal(1, 1);
        });

        it('my second test', function () {
            testName = 'iteration 2';
            this.someName = 'y';
            assert.equal('https:', urlObj.protocol);
            assert.equal('www.paypal.com', urlObj.host);
        });

        it('my third test', function () {
            testName = 'iteration 2';
            this.someName = 'y';
            assert.equal('https:', urlObj.protocol);
            assert.equal('www.paypal.com', urlObj.host);
        });

        it('my fourth test', function () {
            testName = 'iteration 2';
            this.someName = 'y';
            assert.equal('https:', urlObj.protocol);
            assert.equal('www.paypal.com', urlObj.host);
        });

    });
})