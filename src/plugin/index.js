function Plugin(opts) {
  // access to opts ...
}

Plugin.prototype.apply = compiler => {
  compiler.plugin('compilation', compilation => {
    // console.log(compilation);
  });
};

module.exports = Plugin;
