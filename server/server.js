//Always necessary consts

const express = require('express'); //translated: go to the node module folder, find express and run the code
const app = express(); //the thing that was exported from express above, now run it
const PORT = 5000; //all caps cause it won't change

//Created consts

const listOfMonsters = require('./modules/monsters.js');

app.use(express.static('server/public'));

app.get('/monsters', (req, res) =>{
    res.send(listOfMonsters);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
}); //PORT is which entry way, can be any number between 1 and 9999, it's mostly arbitrary, occasionally it will be horrific