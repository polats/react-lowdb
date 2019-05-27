import { assert } from 'chai';
import defaultAwesomeFunction, { awesomeFunction } from '../package_src';

describe('Awesome test.', () => {
  it('should test default awesome function', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Paul';
    assert(defaultAwesomeFunction('Paul') === expectedVal, 'Default not awesome :(');
  });

  it('should test awesome function', () => {
    const expectedVal = 'I am just an Awesome Function';
    assert(awesomeFunction() === expectedVal, 'Named awesome :(');
  });
});
