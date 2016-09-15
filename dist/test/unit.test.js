'use strict';

var _index = require('../plugin/index');

var _index2 = _interopRequireDefault(_index);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('unit test', function () {
  //
  it('should initialize without problem', function () {
    try {
      _index2.default && new _index2.default();
    } catch (e) {
      (0, _chai.expect)(e).to.not.exist;
    }
  });
});