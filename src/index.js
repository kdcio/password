import crypto from 'crypto';

const createHash = (pw, salt) => {
  const { PW_ITERATIONS, PW_KEYLEN, PW_DIGEST } = process.env;
  const iterations = PW_ITERATIONS ? parseInt(PW_ITERATIONS, 10) : 1000;
  const keylen = PW_KEYLEN ? parseInt(PW_KEYLEN, 10) : 64;
  const digest = PW_DIGEST || `sha512`;
  return crypto
    .pbkdf2Sync(pw, salt, iterations || 1000, keylen || 64, digest)
    .toString(`hex`);
};

export const isValidPassword = (inputPassword, salt, hash) => {
  const inputHash = createHash(inputPassword, salt);
  return inputHash === hash;
};

export const getHashSalt = (pw) => {
  // Creating a unique salt for a particular user
  const salt = crypto.randomBytes(16).toString('hex');

  // Hashing user's salt and password with 1000 iterations,
  // 64 length and sha512 digest
  const hash = createHash(pw, salt);

  return { hash, salt };
};
