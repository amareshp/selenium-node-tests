/**
 * Created by apattanaik on 8/19/2014.
 */

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
driver.get('http://www.google.com');

var element = driver.findElement(webdriver.By.name('q'));
element.sendKeys('Cheese!');
element.submit();

driver.getTitle().then(function(title) {
    console.log('Page title is: ' + title);
});

driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
    });
}, 3000);

driver.getTitle().then(function(title) {
    console.log('Page title is: ' + title);
});

driver.quit();
