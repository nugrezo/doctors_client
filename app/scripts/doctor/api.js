const config = require('./../../config')
const store = require('./../../store')

const createDoctor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/doctors',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getAllDoctors = function () {
  return $.ajax({
    url: config.apiUrl + '/doctors',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getDoctor = function (id) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteDoctor = function (id) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateDoctor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + data.doctor.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createDoctor: createDoctor,
  getAllDoctors: getAllDoctors,
  getDoctor: getDoctor,
  deleteDoctor: deleteDoctor,
  updateDoctor: updateDoctor
}
