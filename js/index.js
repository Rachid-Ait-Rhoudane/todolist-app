let showColor = document.querySelector(".show-color");
showColor.style.backgroundColor = localStorage.getItem("color") ?? "white";

let colors = document.querySelectorAll(".color");

for(let color of colors) {

    if(color.style.backgroundColor === localStorage.getItem("color")){
        color.classList.add("active");
    }

    color.addEventListener("click", function() {
        localStorage.setItem("color", color.style.backgroundColor);
        showColor.style.backgroundColor = localStorage.getItem("color");
        for(let c of colors){
            c.classList.remove("active");
        }
        color.classList.add("active");
    });
}
