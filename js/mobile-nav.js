function toggleMenu(){
    document.querySelector('#menu').classList.toggle('mobile-menu');
}

document.querySelector('#mobile-menu-btn').addEventListener('click', toggleMenu);
// document.querySelector('#menu').addEventListener('click', toggleMenu);