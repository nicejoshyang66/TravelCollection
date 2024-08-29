//header往下變換
(function () {
    window.addEventListener('scroll', scrollTop);
    function scrollTop() {
        var Top = document.documentElement.scrollTop,
            $head = document.querySelector('.header');
        if (Top >= 580) {
            $head.classList.add('header--on');
        } else {
            $head.classList.remove('header--on');
        }
    }
}());
//header nav
$(function () {
    let $body = $('.body'),
        win_width = parseInt($(window).width(), 10),
        $hover_btn = $('.header__nav-btn'),
        $subnav = $('.header__nav-subnav'),
        $click_btn = $('.header__nav-btn2');
    //nav hover
    function nav_hover() {
        $click_btn.off('click');
        $hover_btn.off('mouseenter mouseleave');
        $subnav.removeClass('header__nav-subnav--on');
        $body.removeClass('body--on');
        $('.header__right').removeClass('header__right--on');
        $('.hamburger').removeClass('hamburger--on');
        $hover_btn.on('mouseenter', function () {
                $(this).find('.header__nav-link').addClass('header__nav-link--on');
                $(this).find('.header__nav-subnav').addClass('header__nav-subnav--on')
            })
            .on('mouseleave', function () {
                $(this).find('.header__nav-link').removeClass('header__nav-link--on');
                $(this).find('.header__nav-subnav').removeClass('header__nav-subnav--on')
            });

    }
    //nav click
    function nav_click() {
        $click_btn.off('click');
        $hover_btn.off('mouseenter mouseleave');
        $subnav.removeClass('header__nav-subnav--on');
        $click_btn.on('click', function () {
            $(this).toggleClass('header__nav-btn2--on');
            $(this).siblings('.header__nav-subnav').toggleClass('header__nav-subnav--on2');
        });
    }
    //menu open
    function menu_open() {
        let $hamburger = $('.hamburger');
        $hamburger.on('click', function () {
            $(this).toggleClass('hamburger--on');
            $(this).siblings('.header__right').toggleClass('header__right--on');
            $body.toggleClass('body--on');

        });
    }
    menu_open();
    //判斷使用nav function
    function Analyzing() {
        let now_width = parseInt($(window).width(), 10);
        if (now_width > 960) {
            nav_hover();
        } else if (now_width <= 960) {
            nav_click();
        }
    }
    Analyzing();
    //更多展開
    function open_more() {
        let $moreBtn = $('.open-btn');
        $moreBtn.on('click', function () {
            $(this).parents('.open-btn-box').siblings('div').css({
                'display': 'block'
            });
            $(this).parents('.open-btn-box').css({
                'display': 'none'
            })
        });
    }
    open_more();
    function footer_about(width){
        if(width <= 768){
            $('.footer__about-btn').on('click',function(){
                $(this).siblings('.footer__about-collapse').slideToggle();
                $(this).toggleClass('collapsed');
            })
        }else{
            $('.footer__about-btn').off('click');
            $('.footer__about-collapse').removeAttr('style');
        }
    }
    footer_about(win_width);
    //rwd
    $(window).resize(function () {
        let rwd_width = parseInt($(window).width(), 10);
        if (win_width !== rwd_width) {
            Analyzing();
            footer_about(rwd_width);
            win_width = rwd_width;
        }
    });
});