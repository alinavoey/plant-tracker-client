const getFormFields = require('../../lib/get-form-fields.js')
const plantApi = require('../plant/api.js')
const plantUi = require('../plant/ui.js')

const onCreatePlant = function() {
    console.log('inside of create plant')
    $('#add-plant-display').show()
}

const onAddPlant = function(event) {
    console.log('inside of add plant')

    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    console.log(data)

    plantApi.addPlant(data)
        .then((response) => plantUi.onAddPlantSuccess(response))
        .catch(() => plantUi.onAddPlantFailure())
    
}

const onIndexPlants = function() {

    plantApi.indexPlants()
        .then((response) => plantUi.onIndexSuccess(response))
        .catch(() => plantUi.onIndexFailure())
}

module.exports = {
    onCreatePlant,
    onAddPlant,
    onIndexPlants
}