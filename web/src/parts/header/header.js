
import Handlebars from 'handlebars/lib/handlebars.js';

let data = {
    title: "SimplePlate by Maximilian Becher", 
    subtitle: "Boilerplate for your everyday web projects"
}

let data2 = {
    title: "Context matter", 
    subtitle: "context 2"
}

//get header.hbs
let headerPartial = require("./header.hbs");

//register partial
Handlebars.registerPartial("header", headerPartial(data));
