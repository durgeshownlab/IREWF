$(document).ready(function(){
    console.log('object')

    // code for toggling the menu bar
    $(document).on('click', '.c-menu-toggle-btn', function(e){
        console.log('menu bar click ')
        $('.c-menu-bar-container').toggle();
    });
    $(document).on('click', '.c-close-btn', function(e){
        console.log('menu bar click ')
        $('.c-menu-bar-container').toggle();
    });
});