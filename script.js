// Menubar

$(document).ready(function () {
    $('.menubar').click(function () {
        $('ul').toggleClass('show');
    });
});



// scroll
window.addEventListener("scroll", function(){
    let navbar= document.getElementById('menu-bar')
    if(window.pageYOffset >=65){
        navbar.classList.add('sticky')
// console.log("shradha")
    }else{
        navbar.classList.remove('sticky')
    }
})


// slider















