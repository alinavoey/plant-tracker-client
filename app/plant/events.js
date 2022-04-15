const getFormFields = require('../../lib/get-form-fields.js')
const plantApi = require('../plant/api.js')
const plantUi = require('../plant/ui.js')

const onCreatePlant = function() {
    $('#add-plant-display').show()
    $('#plant-btns').hide()
}

const onAddPlant = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    plantApi.addPlant(data)
        .then((response) => plantUi.onAddPlantSuccess(response))
        .catch(() => plantUi.onAddPlantFailure())
    
}

const onIndexPlants = function() {

    plantApi.indexPlants()
        .then((response) => plantUi.onIndexSuccess(response))
        .catch(() => plantUi.onIndexFailure())
}

const onShowPlant = function(event) {
    event.preventDefault()
    const id = event.target.getAttribute('id')

    plantApi.showPlant(id)
        .then((response) => plantUi.onShowPlantSuccess(response))
        .catch(() => plantUi.onShowPlantFailure())
}

const onUpdateDisplay = function() {
    $('#update-plant-display').show()
    $('#show-plant-display').hide()
}

const onUpdatePlant = function(event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)

    plantApi.updatePlant(data)
        .then(() => plantUi.onUpdatePlantSuccess())
        .catch(() => plantUi.onUpdatePlantFailure())
}

const onDeletePlant = function() {

    plantApi.deletePlant()
        .then(() => plantUi.onDeletePlantSuccess())
        .catch(() => plantUi.onDeletePlantFailure())
}

const onBackToPlants = function() {
    $('#show-plants-display').show();
    $('#show-plant-display').hide()
}

module.exports = {
    onCreatePlant,
    onAddPlant,
    onIndexPlants,
    onShowPlant,
    onUpdateDisplay,
    onUpdatePlant,
    onDeletePlant,
    onBackToPlants
}