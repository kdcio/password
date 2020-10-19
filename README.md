# Password Hash and Salt Generator

This package will generate hash and salt given a password. It also has a function to validate a password input.

[![ver](https://img.shields.io/npm/v/@kdcio/password)](https://www.npmjs.com/package/@kdcio/password) [![size](https://badgen.net/bundlephobia/minzip/@kdcio/password)](https://bundlephobia.com/result?p=@kdcio/password) [![build](https://img.shields.io/github/workflow/status/kdcio/password/build)](https://github.com/kdcio/password/actions?query=workflow%3Abuild) [![Known Vulnerabilities](https://snyk.io/test/github/kdcio/password/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kdcio/password?targetFile=package.json) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kdcio_password&metric=alert_status)](https://sonarcloud.io/dashboard?id=kdcio_password) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=kdcio_password&metric=code_smells)](https://sonarcloud.io/dashboard?id=kdcio_password) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kdcio_password&metric=coverage)](https://sonarcloud.io/dashboard?id=kdcio_password) [![license](https://img.shields.io/github/license/kdcio/password)](https://github.com/kdcio/password/blob/master/LICENSE)

## Install

```terminal
npm i @kdcio/password
```

## Usage

### On user registration

```javascript
const { getHashSalt } = require('@kdcio/password');

const register = (password) => {
    ...
    const {hash, salt} = getHashSalt(password);
    ...
};
```

Store the hash and salt in your database.

### On user login

```javascript
const { isValidPassword } = require('@kdcio/password');

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
