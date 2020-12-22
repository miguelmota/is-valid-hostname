# is-valid-hostname

> Validate hostname in JavaScript based on [RFC-1123](https://tools.ietf.org/html/rfc1123).

## Demo

[https://lab.miguelmota.com/is-valid-hostname](https://lab.miguelmota.com/is-valid-hostname)

## Install

```bash
npm install is-valid-hostname
```

## Usage

```javascript
const isValidHostname = require('is-valid-hostname')

isValidHostname('localhost') // true
isValidHostname('example.com') // true
isValidHostname('foo.example.com') // true
isValidHostname('bar.foo.example.com') // true
isValidHostname('exa-mple.co.uk') // true
isValidHostname('xn--80ak6aa92e.com') // true
isValidHostname('9gag.com') // true
isValidHostname('8.8.8.8') // true
isValidHostname('127.0.0.1') // true
isValidHostname('exa_mple.com') // false
isValidHostname('-example.com') // false
isValidHostname('example.com:3000') // false
isValidHostname('8.8.8.8:3000') // false
```

View more [examples](./test/test.js).

## Test

```bash
npm test
```

## FAQ

- Q: Why are numbers allowed in top-level domain?

  - A: Numbers in TLD are allowed under RFC-1123. See [this answer](https://stackoverflow.com/a/53875771/1439168) for more information.

## License

[MIT](LICENSE)
