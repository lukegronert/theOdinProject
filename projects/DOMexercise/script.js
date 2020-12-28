const container = document.querySelector("#container");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement('p');
container.appendChild(p);
p.textContent = "Hey, I'm red!";
p.style.color = "red";

const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "Hey, I'm blue!"
container.appendChild(h3);

const div = document.createElement('div');
div.setAttribute('style', 'border: solid 1px black; background-color: pink');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);
const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
div.appendChild(p2);

function alertFunction() {
    alert("Hello World!");
}

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', alertFunction);

btn2.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
})