var work = document.querySelector(".work");

var array = ["Gamer  ", "Mobile Developer  ", "Website Designer and Developer  "];
var p = 0;

console.log(array.length)

setInterval(() => { 
    work.innerHTML = array[p];
    p = p + 1;
    (p > (array.length- 1)) ? p = 0 : p=p;
}, 6000);



var selection = 0;

function navIndicator(id) {
    let nav_links = document.querySelectorAll("nav a");
    nav_links.forEach(link => {
        link.style.color = "white";
    })
    let nav_item = document.getElementById(id);
    nav_item.style.color = "rgba(255, 109, 5, 0.925)";
}

window.onload = function() {
    setTimeout(()=> {
        bar();
    }, 0)
}

let barcontainer = document.querySelectorAll(".bar-container");

function bar() {
    barcontainer.forEach(container => {
        let bar = container.querySelector(".bar");
        let initialper = container.querySelector(".initial-percentage")
        let finalper = container.querySelector(".final-percentage");

        let p = 0;

        let myinterval = setInterval(()=> {
            p++;
            bar.style.width = p + "%";
            initialper.innerHTML = `${p}%`;
            if (initialper.textContent === finalper.textContent) {
                clearInterval(myinterval);
            }
        }, 25);
    })
}
    

        

