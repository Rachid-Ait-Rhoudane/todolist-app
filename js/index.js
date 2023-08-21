let header = document.createElement("div");
header.className = "header";

let logo = document.createElement("div");
logo.className = "logo";

let logoTxt = document.createTextNode("Zewana");

logo.appendChild(logoTxt);

header.appendChild(logo);

let navLinks = document.createElement("ul");
navLinks.className = "navLinks";

for (let index = 0; index < 4; index++) {
    let navLink = document.createElement("li");
    navLink.className = "navLink";
    let link = document.createElement("a");
    link.className = "link";
    link.href = "#";
    navLink.appendChild(link);
    navLinks.appendChild(navLink);
}

header.appendChild(navLinks);

document.body.appendChild(header);

document.querySelector(".navLinks .navLink:first-child .link").innerText = "Home";
document.querySelector(".navLinks .navLink:nth-child(2) .link").innerText = "About";
document.querySelector(".navLinks .navLink:nth-child(3) .link").innerText = "Service";
document.querySelector(".navLinks .navLink:last-child .link").innerText = "Contact";

let mainContent = document.createElement("div");
mainContent.className = "main-content";

for(let index = 1; index <= 15; index++){
    let box = document.createElement("div");
    box.className = "box";
    let number = document.createElement("span");
    let numberTxt = document.createTextNode(index);
    number.appendChild(numberTxt);
    box.appendChild(number);
    let product = document.createElement("span");
    let productTxt = document.createTextNode("Product");
    product.appendChild(productTxt);
    box.appendChild(product);
    mainContent.appendChild(box);
}

document.body.appendChild(mainContent);

let footer = document.createElement("div");
footer.className = "footer";

let footerTxt = document.createTextNode("Copyright 2021");
footer.appendChild(footerTxt);

document.body.appendChild(footer);


// CSS styling

document.body.style.cssText = `
    min-height: 100vh;
    margin: 0;
`;

header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow: -2px -2px 5px 0px black;
    position: relative;
`;

logo.style.cssText = `
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    color: green;
`;

navLinks.style.cssText = `
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
`;

let links = document.querySelectorAll(".link");

for(let el of links){
    el.style.cssText = `
        text-decoration: none;
        color: grey;
        font-size: 18px;
    `;
}

mainContent.style.cssText = `
    box-sizing: border-box;
    padding: 10px;
    background-color: #ccc;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

let boxes = document.querySelectorAll(".box");

for(let box of boxes){
    box.style.cssText = `
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 45px 0;
    `;
}

let numbers = document.querySelectorAll(".box span:first-child");

for(let number of numbers){
    number.style.cssText = `
        display: block;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    `;
}

let products = document.querySelectorAll(".box span:last-child");

for(let product of products){
    product.style.cssText = `
        display: block;
        color: grey;
    `;
}

footer.style.cssText =  `
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
    background-color: green;
    font-size: 32px;
    color: white;
`;