$(document).ready(function(){
    $('.header__burger').on('click', function(){
        $('.header__menu').slideToggle();
    });

    $('.apply__tabs-list').on('click', '.apply__tabs-item:not(apply__tabs-item active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('.apply__tabs').find('.apply__tabs-content:not(.apply__tabs-content-m)').removeClass('active').animate({
            opacity: 0
        },300).eq($(this).index()).addClass('active').animate({
            opacity: 1
        },300);
    });

    $(window).on('resize load',function(){
        $('.apply__tabs-item').on('click', function(){
            if($(window).width() <= 768){
                $(this).find('.apply__tabs-content-m').stop(true,true).slideToggle();
                $(this).find('.arrow').toggleClass('active');
            }
            else{
                $('.apply__tabs-item').find('.apply__tabs-content-m').hide();
            }
        });
    });
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        slidesPerView: 6,
        spaceBetween: 15,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            900: {
                slidesPerView: 6,
                spaceBetween: 15
            }
        }
    });

    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        $('html,body').animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    });
});