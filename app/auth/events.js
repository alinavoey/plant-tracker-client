const getFormFields = require('../../lib/get-form-fields.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')

const onCreateAccountBtn = function() {
    $('#sign-up-display').show()
    $('#sign-in-btn').show()
    $('#sign-in-display').hide()
    $('#create-account-btn').hide()
}

const onSignInBtn = function() {
    $('#sign-up-display').hide()
    $('#sign-in-btn').hide()
    $('#sign-in-display').show()
    $('#create-account-btn').show()
}

const onChangePwBtn = function() {
    $('#change-pw-display').show()
}

const onHomeBtn = function() {
    $('#plant-btns').show()
    $('#add-plant-display').hide()
    $('#show-plants-display').html(' ')
    $('#show-plant-display').hide()
    $('#update-plant-display').hide()
    $('#plant-display').hide()
}

const onSignUp = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    authApi.signUp(data)
        .then(() => authUi.onSignUpSuccess())
        .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    authApi.signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .catch(() => authUi.onSignInFailure())
}

const onChangePw = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    authApi.changePw(data)
        .then(() => authUi.onChangePwSuccess())
        .catch(() => authUi.onChangePwFailure())
}

const onSignOut = function() {
    
    authApi.signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

module.exports = {
    onCreateAccountBtn,
    onSignInBtn,
    onChangePwBtn,
    onHomeBtn,
    onSignUp,
    onSignIn,
    onChangePw,
    onSignOut
}