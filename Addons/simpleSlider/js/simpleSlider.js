let sliderIndex = 0;

function slider(){
    let sliderItems = document.getElementsByClassName('item');
    let i;

    for(i=0; i<sliderItems.length; i++){
        sliderItems[i].classList.remove('slide-in');
        sliderItems[i].classList.remove('slide-out');
        sliderItems[i].classList.add('slide-out');
    }

    sliderIndex++;

    if(sliderIndex > sliderItems.length){
        sliderIndex = 1;
    }

    sliderItems[sliderIndex - 1].classList.remove('slide-out');
    sliderItems[sliderIndex - 1].classList.add('slide-in');

    setTimeout(slider, 3000);
}

slider();
