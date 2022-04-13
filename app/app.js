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

  // plant event handlers
  $('#plant-btns').on('click', '#create-plant', plantEvents.onCreatePlant)
  $('#add-plant-form').on('submit', plantEvents.onAddPlant)
  $('#plant-btns').on('click', '#view-plants', plantEvents.onIndexPlants)
})
