const createDoctorSuccess = function (res) {
  $('#create-doctor-message').text('You created doctor successfully.')
  $('#create-doctor-form').trigger('reset')
  $('#change-password-message').text('')
  $('#delete-doctor-message').text('')
  $('#edit-doctor-message').text('')
}

const createDoctorFailure = function () {
  $('#create-doctor-message').text('All required information must be completed.')
  $('#change-password-message').text('')
  $('#delete-doctor-message').text('')
  $('#edit-doctor-message').text('')
}

const showAllDoctorsSuccess = function (res) {
  // id of result area
  const selector = '#doctors'
  // Cleaning inner html of result area
  $(selector).empty()
  // Loop each doctor object and add it to result area
  $.each(res.doctors, function (index, doctor) {
    addDoctorToUi(selector, doctor)
  })
  $('#show-all-doctors-message').text('Great. You`ve listed all the doctors that you created.')
  $('#create-doctor-message').text('')
  $('#delete-doctor-message').text('')
  $('#edit-doctor-message').text('')
  $('#change-password-message').text('')
  $('#show-doctor-message').text('')
}

const showAllDoctorsFailure = function () {
  $('#show-all-doctors-form').text('Try again.')
  $('#change-password-message').text('')
  $('#delete-doctor-message').text('')
  $('#show-doctor-message').text('')
}

const showDoctorSuccess = function (res) {
  const doctor = res.doctor
  // id of result area
  const selector = '#doctor'
  // Cleaning inner html of result area
  $(selector).empty()
  //  add doctor object to result area
  addDoctorToUi(selector, doctor)

  $('#show-doctor-message').text('Great! You list the doctor successfully. Click Show all Doctors to see your new list! ')
  $('#show-doctor-form').trigger('reset')
  $('#show-all-doctors-message').text('')
  $('#edit-doctor-message').text('')
  $('#delete-doctor-message').text('')
}

// Appends doctor object with UI format to given dom element
const addDoctorToUi = function (selector, doctor) {
  $(selector).append(addDoctorToUiToLine('Doctor Name:', doctor.name + ' ' + doctor.lastName) +
  addDoctorToUiToLine('Profession:', doctor.specialty) +
  addDoctorToUiToLine('Phone:', doctor.address) +
  addDoctorToUiToLine('Address:', doctor.phoneNumber) +
  addDoctorToUiToLine('Doctor Id:', doctor._id) +
'<br><br>')
}

// Single line format for addDoctorToUi function
const addDoctorToUiToLine = function (fPhrase, secPhrase) {
  return '<strong>' + fPhrase + '</strong> ' + secPhrase + '<br>'
}

const showDoctorFailure = function () {
  $('#show-doctor-message').text('Try again.')
  $('#change-password-message').text('')
  $('#delete-doctor-message').text('')
  $('#show-all-doctors-message').text('')
}

const deleteDoctorSuccess = function (res) {
  $('#delete-doctor-message').text('You`ve deleted doctor successfully.Click Show all Doctors to see your new list!')
  $('#delete-doctor-form').trigger('reset')
  $('#show-doctor-message').text('')
  $('#doctor').text('')
  $('#change-password-message').text('')
  $('#edit-doctor-message').text('')
}

const deleteDoctorFailure = function () {
  $('#delete-doctor-message').text('Try again.')
}

// Fill edit form for selected object
const updateDoctorSuccess = function (res) {
  const doctor = res.doctor
  $('#edit-doctor-form').find('#doctor_id').val(doctor._id)
  $('#edit-doctor-form').find('#doctor_name').val(doctor.name)
  $('#edit-doctor-form').find('#doctor_surName').val(doctor.lastName)
  $('#edit-doctor-form').find('#doctor_profession').val(doctor.specialty)
  $('#edit-doctor-form').find('#doctor_phone').val(doctor.address)
  $('#edit-doctor-form').find('#doctor_address').val(doctor.phoneNumber)
  $('#update-doctor-form').trigger('reset')
  $('#delete-doctor-message').text('')
  $('#change-password-message').text('')
  $('#edit-doctor-message').text('')
  $('#show-all-doctors-message').text('')
  $('#show-doctor-message').text('')
  $('#doctor').text('')
  $('#update-doctor-message').text('Ready to edit')
}

const updateDoctorFailure = function () {
  $('#update-doctor-message').text('Try again.')
  $('#change-password-message').text('')
  $('#show-doctor-message').text('')
}

const editDoctorSuccess = function (res) {
  $('#edit-doctor-message').text('You`ve successfully updated the doctor. Click Show all Doctors to see your new list!')
  $('#edit-doctor-form').trigger('reset')
  $('#change-password-message').text('')
  $('#delete-doctor-message').text('')
  $('#show-all-doctors-message').text()
  $('#show-doctor-message').text('')
  $('#update-doctor-message').text('')
}

const editDoctorFailure = function () {
  $('#edit-doctor-message').text('Failed. Try again.')
  $('#change-password-message').text('')
  $('#show-doctor-message').text('')
}

module.exports = {
  createDoctorSuccess: createDoctorSuccess,
  createDoctorFailure: createDoctorFailure,
  showAllDoctorsSuccess: showAllDoctorsSuccess,
  showAllDoctorsFailure: showAllDoctorsFailure,
  showDoctorFailure: showDoctorFailure,
  showDoctorSuccess: showDoctorSuccess,
  deleteDoctorSuccess: deleteDoctorSuccess,
  deleteDoctorFailure: deleteDoctorFailure,
  updateDoctorSuccess: updateDoctorSuccess,
  updateDoctorFailure: updateDoctorFailure,
  editDoctorSuccess: editDoctorSuccess,
  editDoctorFailure: editDoctorFailure
}
