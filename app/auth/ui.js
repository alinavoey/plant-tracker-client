const store = require('../store.js')
const moment = require('moment')

const onSignUpSuccess = function() {
    $('#home-page-auth').html('<p>Sign Up Successful</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function() {
    $('#home-page-auth').html('<p>Sign Up Failed</p>')
}

const onSignInSuccess = function(response) {
    $('#auth-display').show()
    $('#auth-display').html('<p>Sign In Successful</p>')
    $('form').trigger('reset')

    store.user = response.user
    $('#home-page').hide()
    $('#main-content').show()
    $('#navigation').show()
    $('#home-page-auth').html('')
    $('#plant-btns').show()

    $('#plant-btns').html(`
        <div id="home-img"><img src="./public/cactus-resized.png" width="400" height="400"> </div>
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
    $('#home-page-auth').html('<p>Sign In Failed</p>')
}

const onChangePwSuccess = function() {
    $('#auth-modal-display').html('<p>Password Change Successful</p>')
    $('form').trigger('reset')
}

const onChangePwFailure = function() {
    $('#auth-modal-display').html('<p>Password Change Failed</p>')
    $('form').trigger('reset')
}

const onSignOutSuccess = function() {
    $('#home-page').show()
    $('#main-content').hide()
    $('#add-plant-display').hide()
    $('#update-plant-display').hide()
    $('#show-plant-display').hide()
    $('#show-plants-display').html('')
    $('#show-plant-display').html('')
    $('#auth-modal-display').html('')
    $('#plant-display').html('')
    $('#auth-display').html('')
    $('#home-page-auth').html('<p>Sign Out Successful</p>')
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