# Password Hash and Salt Generator

[![ver](https://img.shields.io/npm/v/@kdcsoftware/password?style=for-the-badge)](https://www.npmjs.com/package/@kdcsoftware/password)
[![build](https://img.shields.io/github/workflow/status/kdcsoftware/password/build?style=for-the-badge)](https://github.com/kdcsoftware/password/actions?query=workflow%3Abuild)
[![codecov](https://img.shields.io/codecov/c/github/kdcsoftware/password?style=for-the-badge)](https://codecov.io/gh/kdcsoftware/password)
[![size](https://img.shields.io/bundlephobia/min/@kdcsoftware/password?style=for-the-badge)](https://bundlephobia.com/result?p=@kdcsoftware/password)
[![license](https://img.shields.io/github/license/kdcsoftware/password?style=for-the-badge)](https://github.com/kdcsoftware/password/blob/master/LICENSE)

[![Maintainability](https://img.shields.io/codeclimate/maintainability/kdcsoftware/password?style=for-the-badge)](https://api.codeclimate.com/v1/badges/1b3fb72854c0f527cd26/maintainability) [![Code Issues](https://img.shields.io/codeclimate/issues/kdcsoftware/password?style=for-the-badge)](https://codeclimate.com/github/kdcsoftware/password/issues)
[![Technical Debt](https://img.shields.io/codeclimate/tech-debt/kdcsoftware/password?style=for-the-badge)](https://codeclimate.com/github/kdcsoftware/password/trends/technical_debt)

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
    if(isValidPassword(password, hash, salt)) {
        console.log("Password is correct");
    } else {
        console.log("Password is wrong");
    }
    ...
};
```

## Configuration

Iterations, keylen and digest can be configured by defining environment variables.

- PW_ITERATIONS
- PW_KEYLEN
- PW_DIGEST

See algorithms in [NodeJs crypto](https://nodejs.org/api/crypto.html#crypto_crypto_createhmac_algorithm_key_options) docs for possible values for digest. More info on the link below.

## Reference

[https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback](https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback)
