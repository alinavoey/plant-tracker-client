const store = require('../store.js')
const moment = require('moment')

const onAddPlantSuccess = function(response) {
    $('#plant-display').html('<p>Plant Added Successfully</p>')
    store.plant = response.plant
    console.log(store.plant)

    $('form').trigger('reset')
} 

const onAddPlantFailure = function() {
    $('#plant-display').html('<p>Plant Added Failed</p>')
} 

const onIndexSuccess = function(response) {
    $('#plant-display').html('<p>Plant Index Successful</p>')
    store.plants = response.plants
    console.log(store.plants)

    const plants = store.plants
    plants.forEach(plant => {
        let species = plant.species
        let lightLevel = plant.lightLevel
        let lastWaterDate = moment(plant.lastWaterDate).format('MM-DD-YYYY')
        let nextWaterDate = moment(plant.lastWaterDate).add(5, 'days').format('MM-DD-YYYY')
        console.log(typeof(lastWaterDate))
        $('#show-plants-display').append(`
            <div>
            <h3>${species}</h3>
            <p>Light Level: ${lightLevel}</p>
            <p>Last Watered On: ${lastWaterDate}</p>
            <p>Next Water Date: ${nextWaterDate}</p>
            </div>
        `)
    })
}

const onIndexFailure = function() {
    $('#plant-display').html('<p>Plant Index Failed</p>')
}

module.exports = {
    onAddPlantSuccess,
    onAddPlantFailure,
    onIndexSuccess,
    onIndexFailure
}