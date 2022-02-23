let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url>',
  development: 'http://127.0.0.1:4741'
}

if (window.location.hostname === '127.0.0.1') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
