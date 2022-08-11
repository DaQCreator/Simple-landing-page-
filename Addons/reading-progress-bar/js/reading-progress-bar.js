function processScroll(){
    let docElem = document.documentElement;
    let scrollTop = docElem['scrollTop']; 
    let scrollBottom = docElem['scrollHeight'] - window.innerHeight
    let scrollPercent = scrollTop / scrollBottom * 100 +'%';

    document.querySelector('#progress-bar').style.setProperty('--scrollAmount', scrollPercent);
}

document.addEventListener('scroll', processScroll);
