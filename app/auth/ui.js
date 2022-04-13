const store = require('../store.js')

const onSignUpSuccess = function() {
    $('#auth-display').html('<p>Sign Up Successful</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function() {
    $('#auth-display').html('<p>Sign Up Failed</p>')
}

const onSignInSuccess = function(response) {
    $('#auth-display').html('<p>Sign In Successful</p>')
    $('form').trigger('reset')

    store.user = response.user

    $('#sign-in-display').hide()
    $('#sign-up-display').hide()
    $('#change-pw-display').show()
    $('#sign-out-btn').show()

    $('#plant-btns').html(`
        <button id="create-plant" type="click">Add New Plant</button>
        <button id="view-plants" type="click">My Plants</button>
    `)
}

const onSignInFailure = function() {
    $('#auth-display').html('<p>Sign In Failed</p>')
}

const onChangePwSuccess = function() {
    $('#auth-display').html('<p>Password Change Successful</p>')
    $('form').trigger('reset')
}

const onChangePwFailure = function() {
    $('#auth-display').html('<p>Password Change Failed</p>')
    $('form').trigger('reset')
}

const onSignOutSuccess = function() {
    $('#auth-display').html('<p>Sign Out Successful</p>')
}

const onSignOutFailure = function() {
    $('#auth-display').html('<p>Sign Out Failed</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePwSuccess,
    onChangePwFailure,
    onSignOutSuccess,
    onSignOutFailure
}