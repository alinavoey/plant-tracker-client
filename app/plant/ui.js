const store = require('../store.js')
const moment = require('moment')

const onAddPlantSuccess = function(response) {
    $('#plant-display').show()
    $('#plant-display').html('<p>Plant Added Successfully</p>')
    store.plant = response.plant

    $('form').trigger('reset')
} 

const onAddPlantFailure = function() {
    $('#plant-display').show()
    $('#plant-display').html('<p>Plant Added Failed</p>')
} 

const onIndexSuccess = function(response) {
    $('#plant-btns').hide()
    $('#auth-display').hide()
    $('#show-plants-display').show()
    $('#show-plants-display').html('<h3>My Plants</h3> <hr>')
    $('#auth-modal-display').html('')

    store.plants = response.plants

    const plants = store.plants
    plants.forEach(plant => {
        let species = plant.species
        let id = plant._id
        $('#show-plants-display').append(`
            <div>
            <button id="${id}">${species}</button>
            </div>
        `)
    })
}

const onIndexFailure = function() {
    $('#plant-display').show()
    $('#plant-display').html('<p>Plant Index Failed</p>')
}

const onShowPlantSuccess = function(response) {
    $('#show-plant-display').show()
    $('#show-plants-display').hide()
    $('#auth-modal-display').html('')

    let today = moment().set({hour:0,minute:0,second:0,millisecond:0}).utc()

    const daysToWater = {
        low: 10,
        indirect: 7,
        direct: 5
    }

    store.plant = response.plant
    const plant = store.plant
    let species = plant.species
    let lightLevel = plant.lightLevel
    let lastWaterDate = moment.utc(plant.lastWaterDate)
    let nextWaterDate = moment.utc(lastWaterDate).add(daysToWater[lightLevel], 'days')

    let waterMe = ''
    let diff = nextWaterDate.startOf('day').diff(today.startOf('day'), 'days')
    if (diff < 0) {
        waterMe = 'You are ' + Math.abs(diff) + ' days late! <br> Please... send help... or water'
    } else if (diff == 0) {
        waterMe = 'Water me today!'
    } else {
        waterMe = 'Water me in ' + diff + ' days!'
    }

    $('#show-plant-display').html(`
        <h3>${species}</h3> <hr>
        <h4>${waterMe}</h4>
        <p>Light Level: ${lightLevel}</p>
        <p>Last Watered On: ${lastWaterDate.format('MM-DD-YYYY')}</p>
        <p>Next Water Date: ${nextWaterDate.format('MM-DD-YYYY')}</p>
        <button id="update-plant-btn">Update</button>
        <button id="delete-plant-btn">Delete</button>
    `)

}

const onShowPlantFailure = function() {
    $('#plant-display').show()
    $('#plant-display').html('<p>Show Plant Failed</p>')
}

const onUpdatePlantSuccess = function() {
    $('#plant-display').show()
    $('#plant-display').html('<p>Plant Updated Successfully</p>')
    $('form').trigger('reset')
}

const onUpdatePlantFailure = function() {
    $('#plant-display').show()
    $('#plant-display').html('<p>Plant Update Failed</p>')
}

const onDeletePlantSuccess = function() {
    $('#plant-display').show()
    $('#plant-display').html('<p>Plant Deleted Successfully</p>')
}

const onDeletePlantFailure = function() {
    $('#plant-display').show()
    $('#plant-display').html('<p>Plant Delete Failed</p>')
}

module.exports = {
    onAddPlantSuccess,
    onAddPlantFailure,
    onIndexSuccess,
    onIndexFailure,
    onShowPlantSuccess,
    onShowPlantFailure,
    onUpdatePlantSuccess,
    onUpdatePlantFailure,
    onDeletePlantSuccess,
    onDeletePlantFailure
}