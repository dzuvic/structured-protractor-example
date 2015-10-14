# structured-protractor-example
Small example showing how to move e2e tests into a module.

For full explanation see here:  http://blog.thecodecampus.de/structured-protractor-end-to-end-tests/

## Steps to run this example:

Execute the following:

    npm install 
    ./node_modules/protractor/bin/webdriver-manager update
    ./node_modules/protractor/bin/webdriver-manager start
    ./node_modules/protractor/bin/protractor         

protractor doesn't need to be installed globally, but it's handy if it is.

You can stop the selenium web driver gracefully using the following command / URL:
    
    curl http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
            
            
