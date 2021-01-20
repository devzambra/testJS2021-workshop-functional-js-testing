# Cloud Integration

The next step in our journey of a having a scaleable, robust and cross browser test suite is to run tests not only locally but also in the cloud to access more browser and platforms where our application can be run in. While it is fine to only develop tests in a single browser, if it comes to testing we should be interested covering the browser that are also used by our users.

The objective of this chapter is to:

- Tweak the setup to allow running tests locally __and__ with a cloud provider
- add your credentials as repository secret and update your GitHub workflow to run tests in the cloud
- increase the browser coverage and run on multiple desktop as well as on at least mobile web browser

You can register a free trial account at any of the common cross browser cloud vendors, e.g. Sauce Labs. Many of them provide [platform configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator?src=sidebar) that allow you to click together the correct capabilities for your configuration.

## WebdriverIO

The WebdriverIO testrunner allows you to define multiple capabilities that map to every spec file that it can find. So if you define e.g. 3 capabilities and have 5 test files it will ultimatively start 15 automated sessions in parallel. You can limit the amount of parallel session by tweaking the [`maxInstances`](https://webdriver.io/docs/options.html#maxinstances) option.

To run your session on Sauce Labs, Browerstack or Testingbot WebdriverIO only needs to have [`user`](https://webdriver.io/docs/options.html#user) and [`key`](https://webdriver.io/docs/options.html#key) defined in your config. Other cloud vendors require also a specific [`protocol`](https://webdriver.io/docs/options.html#protocol), [`hostname`](https://webdriver.io/docs/options.html#hostname) and [`port`](https://webdriver.io/docs/options.html#port).

In addition to that WebdriverIO provides plugins that improve the integration with the vendor. Check out [`@wdio/sauce-service`](https://webdriver.io/docs/sauce-service.html), [`@wdio/browserstack-service`](https://webdriver.io/docs/browserstack-service.html) or [`@wdio/testingbot-service`](https://webdriver.io/docs/testingbot-service.html) for that.

## Testcafe

Testcafe comes with a [browser provider plugin](https://www.npmjs.com/package/testcafe-browser-provider-saucelabs) for [various cloud provider](https://www.npmjs.com/package/testcafe-browser-provider-browserstack) that allows you to run Testcafe jobs in their infrastructure. If you decided to use Testcafe

## Others

If you've decided to use any of the other frameworks with Sauce Labs testrunner toolkit (including Testcade) all you need to do to report tests in the cloud is to provide your username and access key as GitHub [repository secret](https://docs.github.com/en/actions/reference/encrypted-secrets) and populate it into the workflow job. It will be automatically picked up by the `saucectl` testrunner and ensures that your assets are stored in the cloud for debugging and data analysis later on.

