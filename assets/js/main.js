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

    // code for navigating throw the info tab 
    $(document).on('click', '.info-tab-item', function(e){
        console.log($(this).data('id'))

        let target=$($(this).data('id'));

        // $(`${id}`).css('padding-top', '150px')
        
        $('.info-tab-item').removeClass('active');
        $(this).addClass('active')


        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 150
            }, 500);
        }

    });
});