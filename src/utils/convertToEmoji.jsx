const convertToEmoji = (countryCode) => {
  // Example: convert 'US' => 🇺🇸
  if (!countryCode) return ''
  return countryCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt())
    )
}

export default convertToEmoji
