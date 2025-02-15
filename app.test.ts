import { testapi } from './app';

describe('testapi', () => {
  beforeAll(() => {
    console.log = jest.fn(); // Mock console.log
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restore original console.log after tests
  });

  it('should log messages to the console', () => {
    testapi();
    expect(console.log).toHaveBeenCalledWith('hello world!');
    expect(console.log).toHaveBeenCalledWith('demo');
  });
});
