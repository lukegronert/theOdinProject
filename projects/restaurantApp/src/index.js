import {renderHome} from "./home.js";
import {renderNavbar} from "./navbar.js";
import {renderFooter} from "./footer.js";
import {renderMenu} from "./menu.js";
import {renderContact} from "./contact.js";

const content = document.querySelector("#content");

function home() {
    content.innerHTML = '';
    renderNavbar();
    renderHome();
    renderFooter();
}
function menu() {
    content.innerHTML = '';
    renderNavbar();
    renderMenu();
    renderFooter();
}
function contact() {
    content.innerHTML = '';
    renderNavbar();
    renderContact();
    renderFooter();
}

document.addEventListener('click', (e) => {
    if(e.target == document.querySelector('.homeButton')) {
        home();
    }
    if(e.target == document.querySelector('.menuButton')) {
        menu();
    }
    if(e.target == document.querySelector('.contactButton')) {
        contact();
    }

})

home();