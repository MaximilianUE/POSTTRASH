
import Handlebars from 'handlebars/lib/handlebars.js';

/* Import parts*/
import './../parts/header/header';
import './../parts/footer/footer';


/*create body*/

//compile main template
let compiledTemplate = Handlebars.compile(document.getElementById("site").innerHTML);

//fill main template
let div = document.createElement('div');
div.classList.add('site');
div.innerHTML = compiledTemplate();
document.body.appendChild(div);