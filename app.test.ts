import { testapi } from './app';

describe('testapi', () => {
  console.log = jest.fn(); // Mock console.log

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should log hello world and demo', () => {
    testapi();
    expect(console.log).toHaveBeenCalledWith('hello world!');
    expect(console.log).toHaveBeenCalledWith('demo');
  });
});
