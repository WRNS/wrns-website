$(window).load(function(){
    $('#status').delay(300).fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
    $('body').delay(550).css({
        'overflow':'visible'
    });
});

$(document).ready(function(){
    $(".navbar-brand").hover(function(){
        $(this).toggleClass("animated shake");

    });
    $(".img_scroll").hover(function(){
        $(this).toggleClass("animated infinite bounce");

    });
    wow=new WOW({
        mobile:false
    });
    wow.init();
    $('.image-link').magnificPopup({
        type:'image'
    });
    $("#owl-demo").owlCarousel({
        autoPlay:3000,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3]
    });
    $("#owl-demo-1").owlCarousel({
        navigation:false,slideSpeed:300,paginationSpeed:400,singleItem:true
    });
    $('a[href*=#]').click(function(){
        if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
            var $target=$(this.hash);
            $target=$target.length&&$target||$('[name='+ this.hash.slice(1)+']');
        if($target.length){
            var targetOffset=$target.offset().top;
            $('html,body').animate({
                scrollTop:targetOffset
            },600);
            return false;
        }
        }
    });
});
