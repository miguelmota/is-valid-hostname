var test = require('tape')
var isValidHostname = require('../')

test('is valid hostname', function(t) {
  t.plan(78)

  // tld and subdomains
  t.equal(isValidHostname('example.com'), true)
  t.equal(isValidHostname('foo.example.com'), true)
  t.equal(isValidHostname('bar.foo.example.com'), true)
  t.equal(isValidHostname('exa-mple.co.uk'), true)
  t.equal(isValidHostname('a.com'), true)
  t.equal(isValidHostname('a.b'), true)
  t.equal(isValidHostname('foo.bar.baz'), true)
  t.equal(isValidHostname('foo-bar.ba-z.qux'), true)
  t.equal(isValidHostname('hello.world'), true)
  t.equal(isValidHostname('ex-am-ple.com'), true)
  t.equal(isValidHostname('xn--80ak6aa92e.com'), true)
  t.equal(isValidHostname('example.a9'), true)
  t.equal(isValidHostname('example.9a'), true)
  t.equal(isValidHostname('example.99'), true)

  // invalid tld and subdomains
  t.equal(isValidHostname('exa_mple.com'), false)
  t.equal(isValidHostname(''), false)
  t.equal(isValidHostname('ex*mple.com'), false)
  t.equal(isValidHostname('@#$@#$%fd'), false)
  t.equal(isValidHostname('_example.com'), false)
  t.equal(isValidHostname('-example.com'), false)
  t.equal(isValidHostname('foo._example.com'), false)
  t.equal(isValidHostname('foo.-example.com'), false)
  t.equal(isValidHostname('foo.example-.co.uk'), false)
  t.equal(isValidHostname('example-.com'), false)
  t.equal(isValidHostname('example_.com'), false)
  t.equal(isValidHostname('foo.example-.com'), false)
  t.equal(isValidHostname('foo.example_.com'), false)
  t.equal(isValidHostname('example.com-'), false)
  t.equal(isValidHostname('example.com_'), false)
  t.equal(isValidHostname('-foo.example.com_'), false)
  t.equal(isValidHostname('_foo.example.com_'), false)
  t.equal(isValidHostname('*.com_'), false)
  t.equal(isValidHostname('*.*.com_'), false)

  // more subdomains
  t.equal(isValidHostname('example.com'), true)
  t.equal(isValidHostname('example.co.uk'), true)
  t.equal(isValidHostname('-foo.example.com'), false)
  t.equal(isValidHostname('foo-.example.com'), false)
  t.equal(isValidHostname('-foo-.example.com'), false)
  t.equal(isValidHostname('foo-.bar.example.com'), false)
  t.equal(isValidHostname('-foo.bar.example.com'), false)
  t.equal(isValidHostname('-foo-.bar.example.com'), false)

  // wildcard
  t.equal(isValidHostname('*.example.com'), false)

  // hostnames can't have underscores
  t.equal(isValidHostname('_dnslink.ipfs.io'), false)
  t.equal(isValidHostname('xn--_eamop-.donata.com'), false)

  // punycode
  t.equal(isValidHostname('xn--6qq79v.xn--fiqz9s'), true)
  t.equal(isValidHostname('xn--ber-goa.com'), true)

  // valid labels
  t.equal(isValidHostname('localhost'), true)
  t.equal(isValidHostname('127.0.0.1'), true)
  t.equal(isValidHostname('example'), true)
  t.equal(isValidHostname('exa-mple'), true)
  t.equal(isValidHostname('3434'), true)
  t.equal(isValidHostname('bar.q-ux'), true)
  t.equal(isValidHostname('a'.repeat(63)), true)

  // valid length
  t.equal(isValidHostname(`${'a'.repeat(63)}.${'b'.repeat(63)}.${'c'.repeat(63)}.${'c'.repeat(61)}`), true)
  t.equal(isValidHostname(`${'a'.repeat(63)}.${'b'.repeat(63)}.${'c'.repeat(63)}.${'c'.repeat(61)}.`), true)
  t.equal(isValidHostname(`${'a'.repeat(63)}.${'b'.repeat(63)}.${'c'.repeat(63)}.${'c'.repeat(62)}`), false)

  // invalid labels
  t.equal(isValidHostname('example..comw'), false)
  t.equal(isValidHostname('a'.repeat(64)), false)
  t.equal(isValidHostname('-exa-mple'), false)
  t.equal(isValidHostname('-exa-mple-'), false)
  t.equal(isValidHostname('exa-mple-'), false)
  t.equal(isValidHostname('example-'), false)
  t.equal(isValidHostname('.'), false)
  t.equal(isValidHostname('..'), false)
  t.equal(isValidHostname('example..'), false)
  t.equal(isValidHostname('..example'), false)
  t.equal(isValidHostname('.example'), false)

  // contains em-dash
  t.equal(isValidHostname('xn–pple-43d.com'), false)

  // invalid types
  t.equal(isValidHostname(3434), false)
  t.equal(isValidHostname({}), false)
  t.equal(isValidHostname(function(){}), false)

  // junk
  t.equal(isValidHostname('foo.example.com*'), false)
  t.equal(isValidHostname(`google.com"\'\"\""\\"\\'test test`), false)
  t.equal(isValidHostname(`google.com.au'"\'\"\""\\"\\'test`), false)
  t.equal(isValidHostname('...'), false)
  t.equal(isValidHostname('.example.'), false)
  t.equal(isValidHostname('.example.com'), false)
  t.equal(isValidHostname('"example.com"'), false)
})
