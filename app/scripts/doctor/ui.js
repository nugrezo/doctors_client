const createDoctorSuccess = function (res) {
  console.log('res is', res)
  console.log('doctor id is', res.doctor._id)
  const table = document.getElementById('storeList').getElementsByTagName('tbody')[0]
  const newRow = table.insertRow(table.length)
  const cell1 = newRow.insertCell(0)
  cell1.innerHTML = res.doctor.name
  const cell2 = newRow.insertCell(1)
  cell2.innerHTML = res.doctor.lastName
  const cell3 = newRow.insertCell(2)
  cell3.innerHTML = res.doctor.specialty
  const cell4 = newRow.insertCell(3)
  cell4.innerHTML = res.doctor.address
  const cell5 = newRow.insertCell(4)
  cell5.innerHTML = res.doctor.phoneNumber
  const cell6 = newRow.insertCell(5)
  cell6.innerHTML = res.doctor._id
  const cell7 = newRow.insertCell(6)
  cell7.innerHTML = '<button class="clear-button">Clear List</button>'
}

const createDoctorFailure = function () {
  $('#create-doctor-fail').text('Missing Information!!!!')
  setTimeout(() => {
    $('#create-doctor-fail').text('')
  }, 5000)
  $('#change-password-message').text('')
  $('#delete-doctor-message').text('')
  $('#edit-doctor-message').text('')
}

const showAllDoctorsSuccess = function (res) {
  let allDoctorsData = ''
  res.doctors.forEach(doctor => {
    const doctorData = (`
<table>
  <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Specialty</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Doctor Id</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td>${doctor.name}</td>
        <td>${doctor.lastName}</td>
        <td>${doctor.specialty}</td>
        <td>${doctor.address}</td>
        <td>${doctor.phoneNumber}</td>
        <td>${doctor._id}</td>
        <td><button class="edit-button">Edit</button><button class="delete-button">Delete</button></td>
        
     </tr>
  </tbody>
</table>
      `)
    allDoctorsData += doctorData
  })
  $('#show-all-doctors-table').html(allDoctorsData)

  $('#show-doctor-message').text('Great! You list the doctor successfully. Click Show all Doctors to see your new list! ')
  $('#show-doctor-form').trigger('reset')
  $('#show-all-doctors-message').text('')
  $('#edit-doctor-message').text('')
  $('#delete-doctor-message').text('')
}

const showAllDoctorsFailure = function () {
  $('#show-doctor-message').text('Try again.')
  $('#change-password-message').text('')
  $('#delete-doctor-message').text('')
  $('#show-all-doctors-message').text('')
}

const deleteDoctorSuccess = function (res) {
  $('#delete-doctor-message').text('Doctor data is deleted!')
  setTimeout(() => {
    $('#delete-doctor-message').text('')
  }, 3000)
  $('#delete-doctor-form').trigger('reset')
}

const deleteDoctorFailure = function () {
  $('#delete-doctor-message').text('Try again.')
  setTimeout(() => {
    $('#delete-doctor-message').text('')
  }, 5000)
}

const updateDoctorSuccess = function (res) {
  $('#update-doctor-message').text('Form is updated!')
  setTimeout(() => {
    $('#update-doctor-message').text('')
  }, 5000)
  $('#update-doctor-form').trigger('reset')
}

const updateDoctorFailure = function () {
  $('#update-doctor-message').text('Try again.')
  setTimeout(() => {
    $('#update-doctor-message').text('')
  }, 5000)
  $('#change-password-message').text('')
  $('#show-doctor-message').text('')
}

module.exports = {
  createDoctorSuccess: createDoctorSuccess,
  createDoctorFailure: createDoctorFailure,
  showAllDoctorsSuccess: showAllDoctorsSuccess,
  showAllDoctorsFailure: showAllDoctorsFailure,
  deleteDoctorSuccess: deleteDoctorSuccess,
  deleteDoctorFailure: deleteDoctorFailure,
  updateDoctorSuccess: updateDoctorSuccess,
  updateDoctorFailure: updateDoctorFailure
}
