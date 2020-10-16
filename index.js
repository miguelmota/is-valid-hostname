module.exports = function isValidHostname(value, opts) {
  if (typeof value !== 'string') return false
  if (!(opts instanceof Object)) opts = {}

  const validHostnameChars = /^[a-zA-Z0-9-.]{1,253}$/g
  if (!validHostnameChars.test(value)) {
    return false
  }

  if (value.endsWith('.')) {
    value = value.slice(0, value.length - 1)
  }

  if (value.length > 253) {
    return false
  }

  const labels = value.split('.')

  const isInitiallyValid = labels.every(function (label) {
    const validLabelChars = /^([a-zA-Z0-9-]+)$/g

    const validLabel = (
      validLabelChars.test(label) &&
      label.length < 64 &&
      !label.startsWith('-') &&
      !label.endsWith('-')
    )

    return validLabel
  })

  // check to ensure all-numeric values don't pass validation
  // only values with more than one numeric label may have the invalid all-numeric case
  let isAllNumeric = false
  if (labels.length > 1) {
    isAllNumeric = labels.every((label) => label.match(/^[0-9]*$/))
  }

  return isInitiallyValid && !isAllNumeric
}
