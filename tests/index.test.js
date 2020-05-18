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
});
