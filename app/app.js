'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./scripts/auth/events')
const doctorEvents = require('./scripts/doctor/events')
$(() => {
  $(() => {
    $('#create-doctor-form').hide()
    $('#create-doctor-message').hide()
    $('#show-all-doctors-form').hide()
    $('#show-all-doctors-message').hide()
    $('#show-doctor-form').hide()
    $('#show-doctor-message').hide()
    $('#delete-doctor-form').hide()
    $('#delete-doctor-message').hide()
    $('#update-doctor-form').hide()
    $('#update-doctor-message').hide()
    $('#edit-doctor-form').hide()
    $('#edit-doctor-message').hide()
    $('#sign-out-form').hide()
    $('#change-password-form').hide()
    $('#change-password-message').hide()
    $('#sign-up-form').on('submit', authEvents.onSignUpForm)
    $('#sign-in-form').on('submit', authEvents.onSignInForm)
    $('#change-password-form').on('submit', authEvents.onChangePasswordForm)
    $('#sign-out-form').on('submit', authEvents.onSignOut)
    $('#create-doctor-form').on('submit', doctorEvents.onCreateDoctorForm)
    $('#show-all-doctors-form').on('submit', doctorEvents.onShowAllDoctorsForm)
    $('#show-doctor-form').on('submit', doctorEvents.onShowDoctorForm)
    $('#delete-doctor-form').on('submit', doctorEvents.onDeleteDoctorForm)
    $('#update-doctor-form').on('submit', doctorEvents.onUpdateDoctorForm)
    $('#edit-doctor-form').on('submit', doctorEvents.onEditDoctorForm)
  })
})
