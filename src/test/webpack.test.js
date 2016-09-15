import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import Plugin from '../plugin/index';

import path from 'path';

import { expect } from 'chai';

describe('webpack environment', () => {
  let compiler;
  beforeEach(() => {
    compiler = webpack({
      entry: path.resolve(__dirname, 'webpack-test-files', 'test.js'),
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
        new Plugin() /* <---- */
      ]
    });
  });

  it('should run without webpack exiting unexpectedly', done => {
    compiler.run(err => {
      expect(err).to.not.exist;
      done();
    });
  });
});
