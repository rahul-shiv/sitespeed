module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      // Go to Wikipedias login URL
      return driver.get('https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page')
        .then(() => {
          // You need to find the form, the login input fields and the
          // password field. Just add you name and password and submit the form
          // For more docs, checkout the NodeJS Selenium version
          // http://seleniumhq.github.io/selenium/docs/api/javascript/index.html

          // we fetch the selenium webdriver from context
          const webdriver = context.webdriver;
          // and get hold of some goodies we want to use
          const until = webdriver.until;
          const By = webdriver.By;

          // before you start, make your username and password
          const userName = 'sitespeedtest';
          const password = 'sitespeedtest123';
          const loginForm = driver.findElement(By.name('userlogin'));
          driver.findElement(By.id('wpName1')).sendKeys(userName);
          driver.findElement(By.id('wpPassword1')).sendKeys(password);
          const loginButton = driver.findElement(webdriver.By.id('wpLoginAttempt'));
          loginButton.click();
          // we wait for something on the page that verifies that we are logged in
          return driver.wait(until.elementLocated(By.id('pt-userpage')), 3000);
        });
    })
  }
};
