// html - pc || tab_mob
$(window).on('resize', windeowResizeHandler);

function windeowResizeHandler() {
    var winWidth = $(this).innerWidth();
    if (winWidth >= 1200) {
        $('html').removeClass('tab_mob')
        $('html').addClass('pc')
    } else {
        $('html').removeClass('pc')
        $('html').addClass('tab_mob')
    }
}
$(window).trigger('resize');

function scrollGnbFnc() {
    $(window).scroll(function () {
        if ($('html').hasClass('pc')) {
            var rowHeight = $('.row1-wrap').offset().top + $('.row1-wrap').outerHeight();
            var scrollTop = $(window).scrollTop()
            if (scrollTop > rowHeight) {
                $('#header').addClass('on')
            }
            if (scrollTop < rowHeight) {
                $('#header').removeClass('on')
            }
        }
    });
}

function allmenuFnc() {
    var allmenuListBtn = $('.all-menu > ul > li > a')
    allmenuListBtn.click(function () {
        if (allmenuListBtn.next().hasClass('active')) {
            $(this).next().removeClass('active')
        } else {
            $(this).next().addClass('active');
        }
    })
    $('.btn-all-menu-open').click(function () {
        $('.all-menu').css('right','0')
    })
    $('.btn-all-menu-close').click(function () {
        $('.all-menu').css('right','-100vw')
    })
}

$(function () {
    scrollGnbFnc();
    allmenuFnc();
});