import { testapi } from './app';

describe('testapi', () => {
  it('should log hello world', () => {
    console.log = jest.fn(); // Mock console.log
    testapi();
    expect(console.log).toHaveBeenCalledWith('hello world!');
  });
});

// Close any active connections after tests
afterAll(() => {
  // Your code to close connections goes here
});
