// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const plantEvents = require('./plant/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // authentication event handlers
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePw)
  $('#sign-out-btn').on('click', authEvents.onSignOut)

  $('#create-account-btn').on('click', authEvents.onCreateAccountBtn)
  $('#sign-in-btn').on('click', authEvents.onSignInBtn)
  $('#change-pw-btn').on('click', authEvents.onChangePwBtn)
  $('#home-btn').on('click', authEvents.onHomeBtn)

  // plant event handlers
  $('#plant-btns').on('click', '#create-plant', plantEvents.onCreatePlant)
  $('#add-plant-form').on('submit', plantEvents.onAddPlant)
  $('#plant-btns').on('click', '#view-plants', plantEvents.onIndexPlants)
  $('#show-plants-display').on('click', 'button', plantEvents.onShowPlant)
  $('#show-plant-display').on('click', '#update-plant-btn', plantEvents.onUpdateDisplay)
  $('#update-plant-form').on('submit', plantEvents.onUpdatePlant)
  $('#show-plant-display').on('click', '#delete-plant-btn', plantEvents.onDeletePlant)
})
