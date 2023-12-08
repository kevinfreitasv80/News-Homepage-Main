const menu = document.getElementById("menu");
const menuX = document.getElementById("menuClose");
const ul = document.querySelector("ul");
const layer = document.querySelector(".layerDiv");
let oc = false;

menu.addEventListener("click", () => {
    menu.style.display = "none";
    ul.style.display = "block";
    menuX.style.display = "block";
    layer.style.display = "block";
    oc = !oc;
});
menuX.addEventListener("click", () => {
    menu.style.display = "block";
    ul.style.display = "none";
    menuX.style.display = "none";
    layer.style.display = "none";
    oc = !oc;
});

window.addEventListener("resize", function(){
    if(this.innerWidth < 1145){
        if(!oc){
            menu.style.display = "block";
            menuX.style.display = "none";
            ul.style.display = "none";
        }else{
            menu.style.display = "none";
            menuX.style.display = "block";
            ul.style.display = "block";
        }
    }else{
        ul.style.display = "flex";
    }
});