let menubar = document.querySelector(".fa-bars");
let crossbtn = document.querySelector(".fa-xmark");
let navlink = document.getElementById("navlink");

let cseimg = document.getElementById("cseimg");
let itimg = document.getElementById("itimg");
let eceimg = document.getElementById("eceimg");


let hostalimg = document.getElementById("hostalimg");
let libimg = document.getElementById("lib-img");
let labimg = document.getElementById("lab-img");

function showmenu(){
    navlink.style.right = "0";
}
function hidemenu(){
    navlink.style.right = "-200px";
}


let cseallimg = ['image/cse1.jpg','image/cse2.jpeg','image/cse3.jpeg'];
setInterval(function(){
     let random = Math.floor(Math.random()*cseallimg.length);
     cseimg.src = cseallimg[random];
},2500);

let itallimg = ['image/it1.jpg','image/it2.jpeg','image/it3.jpeg','image/it4.webp'];
setInterval(function(){
     let random = Math.floor(Math.random()*itallimg.length);
     itimg.src = itallimg[random];
},2000);

let eceallimg = ['image/ece1.jpeg','image/ece2.jpeg','image/ece3.jpeg','image/ece4.jpeg'];
setInterval(function(){
     let random = Math.floor(Math.random()*eceallimg.length);
     eceimg.src = eceallimg[random];
},1000);


let hostalallimg = ['image/hostal1.jpg','image/hostal2.jpeg','image/hostal3.webp','image/hostal4.jpeg'];
setInterval(function(){
     let random = Math.floor(Math.random()*hostalallimg.length);
     hostalimg.src = hostalallimg[random];
},1000);

let liballimg = ['image/lib1.jpg','image/lib2.jpg','image/lib3.jpeg',];
setInterval(function(){
     let random = Math.floor(Math.random()*liballimg.length);
     libimg.src = liballimg[random];
},1000);

let laballimg = ['image/lab1.jpeg','image/lab2.jpeg','image/lab3.jpg','image/lab4.jpg'];
setInterval(function(){
     let random = Math.floor(Math.random()*laballimg.length);
     labimg.src = laballimg[random];
},1000);

