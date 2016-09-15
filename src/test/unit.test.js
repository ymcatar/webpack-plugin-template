import Plugin from '../plugin/index';

import { expect } from 'chai';

describe('unit test', () => {
  //
  it('should initialize without problem', () => {
    try {
      Plugin && new Plugin();
    } catch (e) {
      expect(e).to.not.exist;
    }
  });
});
