import { getHashSalt, isValidPassword } from '../src';

describe('Password', () => {
  [
    {
      description: 'should generate password and validate it',
      password: 'hello world',
      inputPw: 'hello world',
      expected: true,
    },
    {
      description: 'should not validate',
      password: 'hello world',
      inputPw: 'world hello',
      expected: false,
    },
    {
      description: 'should not validate',
      password: 'hello world',
      inputPw: 'helloworld',
      expected: false,
    },
    {
      description: 'should not validate',
      password: 'hello world',
      inputPw: 'hello worl',
      expected: false,
    },
    {
      description: 'should not validate',
      password: 'hello world',
      inputPw: 'ello world',
      expected: false,
    },
  ].forEach(({ description, password, inputPw, expected }) => {
    it(description, () => {
      const { hash, salt } = getHashSalt(password);
      expect(isValidPassword(inputPw, salt, hash)).toBe(expected);
    });
  });

  it('should generate hash from environment variables', () => {
    process.env.PW_ITERATIONS = 999;
    process.env.PW_KEYLEN = 32;
    process.env.PW_DIGEST = 'sha256';
    const password = 'hello world';
    const { hash, salt } = getHashSalt(password);
    expect(isValidPassword(password, salt, hash)).toBe(true);
  });

  it('should use default if env vars are invalid', () => {
    process.env.PW_ITERATIONS = 'xyz';
    process.env.PW_KEYLEN = 'abc';
    process.env.PW_DIGEST = 'sha256';
    const password = 'hello world';
    const { hash, salt } = getHashSalt(password);
    expect(isValidPassword(password, salt, hash)).toBe(true);
  });
});
