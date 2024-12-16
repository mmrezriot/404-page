const mmrez = document.querySelector('.section');

console.log(mmrez)


// move background page
window.onmousemove= function (e){

    // location onmouse page
    let x = e.clientX;
    let y = e.clientY;

    // style background
    mmrez.style.backgroundPositionX= x/4+ 'px';
    mmrez.style.backgroundPositionY= y/4 + 'px' ;
   
}

