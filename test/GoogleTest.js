/**
 * Created by apattanaik on 8/19/2014.
 */

var webdriver = require('selenium-webdriver');
var assert = require('assert')

var driver = webdriver.Browser().withCapabilities(webdriver.Capabilities.firefox()).build();
driver.get("http://google.com");
driver.findElement(webdriver.By.name('q')).sendKeys('visitamaresh');
driver.findElement(webdriver.By.name('q')).submit();
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'visitamaresh - Google Search';
    });
}, 5000);
assert.isTrue(driver.getPageSource().indexOf('Amaresh') > 0);