import crypto from 'crypto';

const { KDC_PW_ITERATIONS, KDC_PW_KEYLEN, KDC_PW_DIGEST } = process.env;

const createHash = (pw, salt) => {
  return crypto
    .pbkdf2Sync(
      pw,
      salt,
      KDC_PW_ITERATIONS || 1000,
      KDC_PW_KEYLEN || 64,
      KDC_PW_DIGEST || `sha512`
    )
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
