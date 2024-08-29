$(function () {
    let $wd = $(window);
    header_H = parseInt($('.header').height(),10),
        $preview_box = $('.preview'),
        prev_top = $preview_box.offset().top,
        $preview_btn = $('.preview-btn'),
        $preview_close = $('.preview__close');
        // console.log(prev_top);
        function previewFixed(){
            let win_top = $wd.scrollTop() + header_H + 10;
         //    console.log(win_top);
             if(win_top >= prev_top ){
                 $preview_box.addClass('preview-fixed');
             }
             if(win_top < prev_top ){
                 $preview_box.removeClass('preview-fixed');
             }
         }
        previewFixed();
        $wd.on('scroll',previewFixed);
        $preview_btn.on('click',function(){
            $preview_box.addClass('preview-on');
            $(this).addClass('preview-btn-on');
        });
        $preview_close.on('click',function(){
            $preview_box.removeClass('preview-on');
            $preview_btn.removeClass('preview-btn-on');
        });
});