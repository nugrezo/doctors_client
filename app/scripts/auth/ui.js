const store = require('./../../store')

const signUpSuccess = function (res) {
  $('#sign-in-now').text('Please sign in now with the email and password you typed in')
  $('#sign-in-now').css('color', 'yellow')
  setTimeout(() => {
    $('#sign-in-now').text('')
  }, 5000)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#dont-have-account-yet').hide()
}

const signUpFailure = function () {
  $('#sign-up-fail').text('Password does not match! Please try again.')
  setTimeout(() => {
    $('#sign-up-fail').text('')
  }, 5000)
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  store.user = res.user
  $('#nav-bar').show()
  $('#welcome').hide()
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#change-password-message').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#exp').hide()
  $('#create-doctor-form').show()
  $('#show-all-doctors-form').show()
  $('#delete-doctor-message').show()
  $('#update-doctor-message').show()
}

const signInFailure = function () {
  $('#sign-in-fail').text('Email and Password does not match')
  setTimeout(() => {
    $('#sign-in-fail').text('')
  }, 5000)
  $('#sign-in-form').trigger('reset')
  $('#auth-message-sign-up').text('')
}

const changePasswordSuccess = function (res) {
  $('#change-password-form').trigger('reset')
  $('#change-password-message').text('Password Changed!')
}

const changePasswordFailure = function (res) {
  $('#auth-message-password-change').text('Try again.')
  $('#change-password-form').trigger('reset')
}
const signOutSuccess = function (res) {
  $('#sign-out-form').hide()
  $('#sign-in-form').show()
  $('#nav-bar').hide()
  $('#create-doctor').trigger('reset')
  $('#storeList td').remove()
  $('#create-doctor-form').hide()
  $('#show-all-doctors-form').hide()
  $('#show-all-doctors-table td').text('')
  $('#welcome').show()
  $('#exp').show()
}

const signOutFailure = function (res) {
  $('#sign-out-fail').text('Sign out failed!')
}
module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
