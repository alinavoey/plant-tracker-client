const store = require('../store.js')
const config = require('../config.js')

const addPlant = function(data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/plants',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const indexPlants = function() {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/plants',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const showPlant = function(id) {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/plants/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const updatePlant = function(data) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/plants/' + store.plant._id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const deletePlant = function() {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/plants/' + store.plant._id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    addPlant,
    indexPlants,
    showPlant,
    updatePlant,
    deletePlant
}