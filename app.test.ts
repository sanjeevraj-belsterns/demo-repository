import { testapi } from './app';

describe('testapi', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should log hello world and demo', () => {
    testapi();
    expect(console.log).toHaveBeenCalledWith('hello world!');
    expect(console.log).toHaveBeenCalledWith('demo');
  });
});
