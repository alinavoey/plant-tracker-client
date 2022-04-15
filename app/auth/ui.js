const store = require('../store.js')
const moment = require('moment')

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
    $('#home-page').hide()
    $('#main-content').show()
    $('#navigation').show()

    $('#plant-btns').html(`
        <img src="./public/pot-resized.png" width="400" height="400"> <br>
        <button id="create-plant" type="click">Add New Plant</button> <br>
        <button id="view-plants" type="click">My Plants</button> <br>
    `)

    // let d = new Date();
    // let month = d.getMonth()+1;
    // let day = d.getDate();
    // let today = d.getFullYear() + '-' +
    //     (month<10 ? '0' : '') + month + '-' +
    //     (day<10 ? '0' : '') + day;
    // console.log(today)
    // console.log(typeof(today))
    let today = moment().format('YYYY-MM-DD')
    $('input[type="date"]').attr('max', today)

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