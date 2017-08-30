const translations = require('../data/translations.json')

function get (key, lang) {
  const trans = translations[key]

  return trans ? trans[lang] || key : key
}
