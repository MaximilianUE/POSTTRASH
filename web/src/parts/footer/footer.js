
import Handlebars from 'handlebars/lib/handlebars.js';

let footerData = {
    title: "Following links", 
    menuitem: [
        {
            name: "hi",
            link: "hallo"
        },
        {
            name: "tschüss",
            link: "bye"
        },
    ],
}

//get header.hbs
let footerPartial = require("./footer.hbs");

//register partial
Handlebars.registerPartial("footer", footerPartial(footerData));
