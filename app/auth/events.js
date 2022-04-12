const getFormFields = require('../../lib/get-form-fields.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')

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
    onSignUp,
    onSignIn,
    onChangePw,
    onSignOut
}