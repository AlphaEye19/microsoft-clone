const element=document.querySelector('.menu-btn');
element.addEventListener('click',hamFunction);

function hamFunction(){
    const itemClass=document.querySelector('.main-menu');
    itemClass.classList.toggle('show');
}

// const element = document.getElementById("hamburger");
// element.addEventListener("click", myFunction);

// function myFunction() {
//     const items= document.querySelector('.items');
//     items.classList.toggle("hammenu");
// }

// document.querySelector('.menu-btn').addEventListener('click',()=>
// document.querySelector('.main-menu').classList.toggle('show')
// );