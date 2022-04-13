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

module.exports = {
    addPlant,
    indexPlants
}