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
isValidHostname('127.0.0.1') // true
isValidHostname('example.com') // true
isValidHostname('foo.example.com') // true
isValidHostname('bar.foo.example.com') // true
isValidHostname('exa-mple.co.uk') // true
isValidHostname('xn--80ak6aa92e.com') // true
isValidHostname('exa_mple.com') // false
isValidHostname('-example.com') // false
```

View more [examples](./test/test.js).

Also checkout [`is-valid-domain`](https://github.com/miguelmota/is-valid-domain).

## License

[MIT](LICENSE)
