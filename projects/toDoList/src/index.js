import {renderProjectBar} from './projectBar.js';
import {renderToDos} from './todos.js';

const projectBar = document.querySelector('#projectBar');
const content = document.querySelector('#content');

renderProjectBar();
renderToDos();
