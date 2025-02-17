import { testapi } from './app';

describe('testapi function', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(); // Mock console.log
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore original console.log
  });

  it('should log hello world and demo', () => {
    testapi();
    expect(console.log).toHaveBeenCalledWith('hello world!');
    expect(console.log).toHaveBeenCalledWith('demo');
  });
});

// Close any active connections gracefully
afterAll(() => {
  // Your connection close logic here, e.g. db.close();
});