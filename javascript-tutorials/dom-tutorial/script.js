// Add new div container in DOM 
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add('content');
content.textContent = "This is the glorious text content!";

container.appendChild(content);

const rText = document.createElement("p");
rText.style.color = 'red';
rText.textContent = "Hey I'm red!";
container.appendChild(rText);

const bText = document.createElement("h3");
bText.style.color = 'blue';
bText.textContent = "I'm a blue h3!";
container.appendChild(bText);

const bpink = document.createElement("div");
bpink.style.backgroundColor = "pink";
bpink.style.border = "3px solid black";

const bpink_h = document.createElement('h1');
bpink_h.textContent = "I'm in a div";

const bpink_p = document.createElement('p');
bpink_p.textContent = "ME TOO!";

bpink.appendChild(bpink_h);
bpink.appendChild(bpink_p);
container.appendChild(bpink);

const btn = document.querySelector("#btn");
btn.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'blue';
});

btn.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'white';
});