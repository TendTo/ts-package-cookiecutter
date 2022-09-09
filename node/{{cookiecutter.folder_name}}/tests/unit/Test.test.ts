import { expect } from 'chai';
import { Test } from '../../src/test';

describe('Test class', function () {
  it('should be created', function () {
    expect(new Test('')).to.be.ok;
  });
  it('should have the correct setup', function () {
    const name = 'name';
    const topic = new Test(name);
    expect(topic.state).to.equal(name);
  });
});
