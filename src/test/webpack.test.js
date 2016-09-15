// import webpack from 'webpack';
// import CleanWebpackPlugin from 'clean-webpack-plugin';
// import LeasotPlugin from '../index';

// import path from 'path';

// import {expect} from 'chai';

// describe('webpack environment', () => {
//   let compiler;
//   beforeEach(() => {
//     compiler = webpack({
//       entry: path.resolve(__dirname, 'webpack-test-files', 'test.js'),
//       output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//       },
//       plugins: [
//         new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
//         new LeasotPlugin({
//           outputPath: 'todo.md'
//         })
//       ]
//     });
//   });

//   it('should generate a correct todo.md file', done => {
//     compiler.run((err, stats) => {
//       if (err) {
//         throw new Error(`Webpack failed.`);
//       }
//       done();
//     });
//   });
// });