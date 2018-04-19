console.log('client.js is connected');

$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET', //what kind of request
        url: '/monsters' //where to look for info
    })//there should not be a semi colon here because .ajax followed by .then is a chain
    .then(function(response){
        response.forEach((monster) => {
            $('#monstersList').append(`<li>${monster}</li>`);
        }); 
    }); 
}