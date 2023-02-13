var arr = [false, false];

if(document.querySelector('.picture'))
{
    var coffeeCup = document.querySelector('.picture');
    var coffeeCupCoords = coffeeCup.getBoundingClientRect();
    arr[0] = true;
}

if(document.querySelector('.cupOfCoffee')){
    var cupOfCoffee = document.querySelector('.cupOfCoffee');
    var cupOfCoffeeCoords = cupOfCoffee.getBoundingClientRect();
    arr[1] = true;
}

// получить скролл
window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if(arr[0] == true){
        setTimeout(function() {
            coffeeCup.style.top = scrolled/25 + 'px';
        }, 300);}

    if(arr[1] == true){
        setTimeout(function() {
            cupOfCoffee.style.top = scrolled/20 + 'px';
        }, 300);}
}




$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});