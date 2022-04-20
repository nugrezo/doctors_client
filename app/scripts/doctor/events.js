const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateDoctorForm = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createDoctor(data)
    .then(ui.createDoctorSuccess)
    .catch(ui.createDoctorFailure)
}

const onShowAllDoctorsForm = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.getAllDoctors(data)
    .then(ui.showAllDoctorsSuccess)
    .catch(ui.showAllDoctorsFailure)
}

const onShowAllDoctors = function (event) {
  event.preventDefault()
  api.getAllDoctors()
    .then(ui.showAllDoctorsSuccess)
    .catch(ui.showAllDoctorsFailure)
}

const onDeleteDoctorForm = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteDoctor(data.doctor.id)
    .then(ui.deleteDoctorSuccess)
    .catch(ui.deleteDoctorFailure)
}

const onUpdateDoctorForm = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateDoctor(data)
    .then(ui.updateDoctorSuccess)
    .catch(ui.updateDoctorFailure)
}

// const onSaveUpdate = function (event) {
//   event.preventDefault()
//   console.log('event is:', event)
//   const form = event.target
//   const data = getFormFields(form)
//   api.updateDoctor(data, data.doctor.id)
//     .then(ui.editDoctorSuccess)
//     .catch(ui.editDoctorFailure)
// }

module.exports = {
  onCreateDoctorForm: onCreateDoctorForm,
  onShowAllDoctorsForm: onShowAllDoctorsForm,
  // onShowDoctorForm: onShowDoctorForm,
  onDeleteDoctorForm: onDeleteDoctorForm,
  onUpdateDoctorForm: onUpdateDoctorForm,
  onShowAllDoctors: onShowAllDoctors
}
