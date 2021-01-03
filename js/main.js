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
// var filter = "win16|win32|win64|mac|macintel";
// if (navigator.platform) {
//     if (filter.indexOf(navigator.platform.toLowerCase()) >= 0) {
//         $(document).ready(function () {
//             var areaWidth = $("#footer").innerWidth();
//             $("#container").css("width", areaWidth)
//             $(window).resize(function () {
//                 location.reload();
//             })
//         })
//     } else {}
// }

// $(function () {
// });