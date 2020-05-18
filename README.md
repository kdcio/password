# Password Hash and Salt Generator

[![ver](https://img.shields.io/npm/v/@kdcsoftware/password?style=for-the-badge)](https://www.npmjs.com/package/@kdcsoftware/password)
[![build](https://img.shields.io/github/workflow/status/kdcsoftware/password/build?style=for-the-badge)](https://github.com/kdcsoftware/password/actions?query=workflow%3Abuild)
[![codecov](https://img.shields.io/codecov/c/github/kdcsoftware/password?style=for-the-badge)](https://codecov.io/gh/kdcsoftware/password)
[![size](https://img.shields.io/bundlephobia/min/@kdcsoftware/password?style=for-the-badge)](https://bundlephobia.com/result?p=@kdcsoftware/password)
[![license](https://img.shields.io/github/license/kdcsoftware/password?style=for-the-badge)](https://github.com/kdcsoftware/password/blob/master/LICENSE)

This package will generate hash and salt given a password. It also has a function to validate a password input.

## Install

```terminal
npm i @kdcsoftware/password
```

## Usage

### On user registration

```javascript
const { getHashSalt } = require('@kdcsoftware/password');

const register = (password) => {
    ...
    const {hash, salt} = getHashSalt(password);
    ...
};
```

Store the hash and salt in your database.

### On user login

```javascript
const { isValidPassword } = require('@kdcsoftware/password');

const login = (username, password) => {
    ...
    const {hash, salt} = getFromDatabase(username);
    if(isValidPassword(password)) {
        console.log("Password is correct");
    } else {
        console.log("Password is wrong");
    }
    ...
};
```

## Configuration

Iterations, keylen and digest can be configured by defining environment variables.

- KDC_PW_ITERATIONS
- KDC_PW_KEYLEN
- KDC_PW_DIGEST

See below reference for more info.

## Reference

[https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback](https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback)
