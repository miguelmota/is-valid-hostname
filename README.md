# is-valid-hostname

> Validate hostname in JavaScript based on [RFC-3696](https://tools.ietf.org/html/rfc3696#section-2).

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
isValidHostname('exa_mple.com') // false
isValidHostname('-example.com') // false
isValidHostname('example.com:3000') // false
isValidHostname('127.0.0.1') // false
```

View more [examples](./test/test.js).

## Test

```bash
npm test
```

## License

[MIT](LICENSE)
