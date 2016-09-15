This is a simple template for creating webpack plugin, with ES2015 syntax and testing pipeline.

## File Orgranization

```
- src
  - plugin: for all your plugin code
  - test: for all your tests
    - webpack-test-files: directory for storing file used by the test case for webpack test.
    - webpack.test.js: for writing webpack test (running the plugin in actual webpack environment)
    - unit.test.js: for writing unit test (running the plugin class directly)
- dist: for storing ES5-friendly code
```

## Usage

To build the plugin with gulp, run:
```
npm run build
```

To build the plugin and then run test, run:
```
npm run test
```

If you want to publish your new plugin to npm, rename the package, then remove the following line in `package.json`:
```
  "private": true
```