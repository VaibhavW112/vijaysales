var express = require(`express`);
var app = express();

app.get("/", (req, res) => {
    
    res.send(
        "<h1> Vijay sales </h1>"
        + "<hr/>"
        + "<h3> Smart Devices for Sale</h3>"
        + "<br/>"
        + "<ol>"
        + "<li> Laptops </li>"
        + "<li> Mobile Phone </li>"
        + "<li> Smart Watches </li>"
        + "</ol>"
    );
});

var server = app.listen(9000);
console.log("Vijay sales online shopping running on port 9000 ")