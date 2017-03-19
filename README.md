# unity-package-decrypt

> Note: uses es6 classes, see [this](http://node.green/#ES2015-functions-class) for node version compatibility

[![Build Status](https://travis-ci.org/bengreenier/unity-package-decrypt.svg?branch=master)](https://travis-ci.org/bengreenier/unity-package-decrypt)

Client for decrypting packages from the unity package service.

## How

Do I...

### Install

Simple! Just `npm install unity-package-decrypt`

### Use

See the following (or the [tests](./test/basic.js)):

```
const client = new UnityDecryptClient()

client.decrypt(packageData, packageKey).then(...)
```

## License

MIT
