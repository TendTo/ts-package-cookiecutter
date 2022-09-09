import { expect } from 'chai';
import { Test } from '../../src/test';

describe('Test class', function () {
  it('should be created', function () {
    expect(new Test('')).to.be.ok;
  });
  it('should have the correct setup', function () {
    const name = 'name';
    const test = new Test(name);
    expect(test.state).to.equal(name);
  });
});
