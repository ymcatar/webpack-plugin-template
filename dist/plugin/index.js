'use strict';

function Plugin(opts) {
  // access to opts ...
}

Plugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function (compilation) {
    // console.log(compilation);
  });
};

module.exports = Plugin;