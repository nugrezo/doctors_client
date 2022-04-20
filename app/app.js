'use strict'
// const { Modal } = require('bootstrap')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./scripts/auth/events')
const doctorEvents = require('./scripts/doctor/events')

$(() => {
  $(() => {
    $('#sign-up-form').hide()
    $('#dont-have-account-yet').on('click', function (event) {
      event.preventDefault()
      $('#sign-up-form').show()
      $('#sign-in-form').hide()
    })
    $('#have-account').on('click', function (event) {
      event.preventDefault()
      $('#sign-in-form').show()
      $('#sign-up-form').hide()
    })
    $('#create-doctor-form').hide()
    $('#show-all-doctors-form').hide()
    $('#nav-bar').hide()
    $('#delete-doctor-message').hide()
    $('#sign-up-form').on('submit', authEvents.onSignUpForm)
    $('#sign-in-form').on('submit', authEvents.onSignInForm)
    $('#change-password-form').on('submit', authEvents.onChangePasswordForm)
    $('#sign-out').on('click', authEvents.onSignOut)
    $('#create-doctor').on('submit', doctorEvents.onCreateDoctorForm)
    $('#show-all-doctors-form').on('submit', doctorEvents.onShowAllDoctorsForm)
    $('#show-all-doctors-table').on('click', '.delete-button', function () {
      const modalDelete = document.getElementById('myModal-delete')
      modalDelete.style.display = 'block'
    })
    const spanDelete = document.getElementsByClassName('close-delete')[0]
    const modalDelete = document.getElementById('myModal-delete')
    spanDelete.onclick = function () {
      modalDelete.style.display = 'none'
    }

    $('#show-all-doctors-table').on('click', '.edit-button', function () {
      const modalUpdate = document.getElementById('myModal-update')
      modalUpdate.style.display = 'block'
    })
    const span = document.getElementsByClassName('close-update')[0]
    const modalUpdate = document.getElementById('myModal-update')
    span.onclick = function () {
      modalUpdate.style.display = 'none'
    }
    $('#storeList').on('click', '.clear-button', function (e) {
      $(this).closest('tr').remove()
    })
    $('#update-doctor-form').on('submit', doctorEvents.onUpdateDoctorForm)
    $('#show-all-doctors').on('click', doctorEvents.onShowAllDoctors)
    $('#delete-doctor-form').on('submit', doctorEvents.onDeleteDoctorForm)
  })
})
