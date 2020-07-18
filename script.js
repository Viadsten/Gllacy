
var link = document.querySelector(".button-contacts");
var hide_link = document.querySelector(".close-button");
var modal = document.querySelector(".modal");
var radio1 = document.getElementById("1");
var radio2 = document.getElementById("2");
var radio3 = document.getElementById("3");
var chocolate = document.querySelector(".offers-chocolate");
var jam = document.querySelector(".offers-jam");
var sorbet = document.querySelector(".offers-sorbet");
var bodyNode = document.body || document.getElementsByTagName('body')[0];

link.onclick = function() {
    modal.style.display = "block";
};

hide_link.onclick = function() {
    modal.style.display = "none";
    
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27){
        evt.preventDefault();
        modal.style.display = "none";
    }
})

radio1.onclick = function(){
    bodyNode.classList.add("radio1");
    bodyNode.classList.remove("radio2");
    bodyNode.classList.remove("radio3");
    chocolate.style.display = "block";
    sorbet.style.display = "none"
    jam.style.display = "none";
    
}


radio2.onclick = function(){
    bodyNode.classList.add("radio2");
    bodyNode.classList.remove("radio1");
    bodyNode.classList.remove("radio3");
    chocolate.style.display = "none";
    sorbet.style.display = "none"
    jam.style.display = "block";
    
}

radio3.onclick = function(){
    bodyNode.classList.add("radio3");
    bodyNode.classList.remove("radio2");
    bodyNode.classList.remove("radio1");
    chocolate.style.display = "none";
    sorbet.style.display = "block"
    jam.style.display = "none";
    
}