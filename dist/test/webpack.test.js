'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _cleanWebpackPlugin = require('clean-webpack-plugin');

var _cleanWebpackPlugin2 = _interopRequireDefault(_cleanWebpackPlugin);

var _index = require('../plugin/index');

var _index2 = _interopRequireDefault(_index);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('webpack environment', function () {
  var compiler = void 0;
  beforeEach(function () {
    compiler = (0, _webpack2.default)({
      entry: _path2.default.resolve(__dirname, 'webpack-test-files', 'test.js'),
      output: {
        path: _path2.default.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      plugins: [new _cleanWebpackPlugin2.default([_path2.default.resolve(__dirname, 'dist')]), new _index2.default()]
    });
  });

  it('should run without webpack exiting unexpectedly', function (done) {
    compiler.run(function (err) {
      (0, _chai.expect)(err).to.not.exist;
      done();
    });
  });
});