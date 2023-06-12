//scia mouse
let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let allBtn = document.querySelectorAll('button');

document.addEventListener('mousemove', function(e){

    let x = e.clientX;
    let y = e.clientY;

    outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
    cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;

});



