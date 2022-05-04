const express = require('express');
const bodyParser = require('body-parser');
const date = require(`${__dirname}/dateTitle`);
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var agendas = [];

app.get("/", function(req, res) {
    // Note that you can assign a value and name attribute to the + button to make a note from different webpages.

    // move the crossed item to the end of the list
    // have a clear button 
    // delete an item
    let currDay = date.getFullDate()
    res.render('list', {dayOfWeek: currDay, listItems: agendas});

});

app.post("/", function(reqest, response) {
    var nextAgenda = reqest.body.toDo;
    if (nextAgenda !== ""){
        agendas.push(nextAgenda);
    }
    response.redirect("/");
})

app.listen(3000, function(){
    console.log('listening on port 3000');
})