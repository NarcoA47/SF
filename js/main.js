/*------------------------
--------------------------
Java script files and associates
Descruptive Java script files
--------------------------
--------------------------*/


$(document).ready(function(){
$nav=$('.nav');
$toggleCollapse = $('.toggle-collapse');

/*click event on toggle menu */
$toggleCollapse.click(function(){
    $nav.$toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        autopplay: true,
        autopplaytimeout: 3000,
        dots: false,
        nav: true
    }

    );

    //click to slide up
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    })

    //click to slide down
    $('.button btn').click(function(){
        $('html, body').animate({
            scrollTo: $("blog-post").offset().top
        }, 1000)
    })
});