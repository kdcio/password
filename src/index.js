import crypto from 'crypto';

export const isValidPassword = (inputPassword, salt, hash) => {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return inputHash === hash;
};

export const getHashSalt = (pw) => {
  // Creating a unique salt for a particular user
  const salt = crypto.randomBytes(16).toString('hex');

  // Hashing user's salt and password with 1000 iterations,
  // 64 length and sha512 digest
  const hash = crypto.pbkdf2Sync(pw, salt, 1000, 64, `sha512`).toString(`hex`);

  return { hash, salt };
};
