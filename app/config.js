let apiUrl
const apiUrls = {
  production: 'https://secure-sierra-58295.herokuapp.com',
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
