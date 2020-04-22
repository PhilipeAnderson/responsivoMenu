var menuDoc = document.getElementsByClassName('link-nav-arrow')[0]
var listSecond = document.querySelector('.list-nav-second')


// var iconMenu = document.getElementById('icon-menu');
// var menu = document.getElementById('menu')
// iconMenu.hideMenu('click', function(){
//     menu.hidden('menu')
// });



menuDoc.addEventListener('click', function(){

    listSecond.classList.toggle('hide')
    menuDoc.classList.toggle('arrow')
});