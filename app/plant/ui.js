const store = require('../store.js')
const moment = require('moment')

const onAddPlantSuccess = function(response) {
    $('#plant-display').html('<p>Plant Added Successfully</p>')
    store.plant = response.plant

    $('form').trigger('reset')
} 

const onAddPlantFailure = function() {
    $('#plant-display').html('<p>Plant Added Failed</p>')
} 

const onIndexSuccess = function(response) {
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
    $('#plant-display').html('<p>Plant Index Failed</p>')
}

const onShowPlantSuccess = function(response) {
    const daysToWater = {
        low: 10,
        indirect: 7,
        direct: 5
    }

    store.plant = response.plant
    const plant = store.plant
    let species = plant.species
    let lightLevel = plant.lightLevel
    let lastWaterDate = moment(plant.lastWaterDate).format('MM-DD-YYYY')
    let nextWaterDate = moment(plant.lastWaterDate).add(daysToWater[lightLevel], 'days').format('MM-DD-YYYY')

    $('#show-plant-display').html(`
        <h3>${species}</h3>
        <p>Light Level: ${lightLevel}</p>
        <p>Last Watered On: ${lastWaterDate}</p>
        <p>Next Water Date: ${nextWaterDate}</p>
        <button id="update-plant-btn">Update</button>
        <button id="delete-plant-btn">Delete</button>
    `)

}

const onShowPlantFailure = function() {
    $('#plant-display').html('<p>Show Plant Failed</p>')
}

const onUpdatePlantSuccess = function() {
    $('#plant-display').html('<p>Plant Updated Successfully</p>')
}

const onUpdatePlantFailure = function() {
    $('#plant-display').html('<p>Plant Update Failed</p>')
}

const onDeletePlantSuccess = function() {
    $('#plant-display').html('<p>Plant Deleted Successfully</p>')
}

const onDeletePlantFailure = function() {
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