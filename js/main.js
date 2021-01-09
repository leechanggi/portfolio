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
        $('.all-menu').css('right', '0')
    })
    $('.btn-all-menu-close').click(function () {
        $('.all-menu').css('right', '-100vw')
    })
}

function stringEffectFnc() {
    String.prototype.toKorChars = function () {
        var cCho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
            cJung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
            cJong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
            cho, jung, jong;
        var str = this,
            cnt = str.length,
            chars = [],
            cCode;
        for (var i = 0; i < cnt; i++) {
            cCode = str.charCodeAt(i);
            if (cCode == 32) {
                chars.push(" ");
                continue;
            } // 한글이 아닌 경우 
            if (cCode < 0xAC00 || cCode > 0xD7A3) {
                chars.push(str.charAt(i));
                continue;
            }
            cCode = str.charCodeAt(i) - 0xAC00;
    
            jong = cCode % 28;
            // 종성 
            jung = ((cCode - jong) / 28) % 21
    
            // 중성 
            cho = (((cCode - jong) / 28) - jung) / 21
            // 초성 
    
            //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
            // chars.push(cCho[cho], cJung[jung]); 
            // if (cJong[jong] !== '') { 
            //     chars.push(cJong[jong]); 
            //     } 
    
    
            //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
            chars.push(cCho[cho]);
            chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28)));
            if (cJong[jong] !== '') {
                chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28) + jong));
            }
    
        }
    
        return chars;
    }
    
    
    //타이핑할 문장
    var result1 = "안녕하세요,";
    var result2 = '<em>' + '{' + '</em>' + '웹 퍼블리셔' + '<em>' + '} ' + '</em>' + '이창기 입니다.';
    var typeing1 = [],
        typeing2 = [];;
    result1 = result1.split(''); // 한글자씩자름
    result2 = result2.split(''); // 한글자씩자름
    
    //각글자 초성,중성,종성으로 나눔
    for (var i = 0; i < result1.length; i++) {
        typeing1[i] = result1[i].toKorChars();
    }
    for (var i = 0; i < result2.length; i++) {
        typeing2[i] = result2[i].toKorChars();
    }
    
    //출력할 엘리먼트요소 가져옴 
    var resultDiv1 = document.getElementsByClassName("result1")[0];
    var resultDiv2 = document.getElementsByClassName("result2")[0];
    //
    var text = "";
    var i = 0;
    var j = 0;
    
    //총글자수
    var imax1 = typeing1.length;
    var imax2 = typeing2.length;
    
    //setInterval을 이용해 반복적으로 출력 
    var inter = setInterval(typi, 75);
    var inter2;
    
    
    function typi() {
        //글자수만큼 반복후 종료 
        resultDiv1.classList.add("cursor");
        if (i <= imax1 - 1) {
            //각 글자가 초성 중성 종성 순서대로 추가되도록 
            var jmax1 = typeing1[i].length;
            resultDiv1.innerHTML = text + typeing1[i][j];
            j++;
            if (j == jmax1) {
                text += typeing1[i][j - 1]; //초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
                i++;
                j = 0;
            }
        } else {
            clearInterval(inter);
            text = "";
            i = 0;
            j = 0;
            setTimeout(function () {
                resultDiv1.classList.remove("cursor");
                setTimeout(function () {
                    resultDiv2.classList.add("cursor");
                    setTimeout(function () {
                        inter2 = setInterval(typi2, 75);
                    }, 400);
                }, 300);
            }, 400);
        }
    }
    
    function typi2() {
        //글자수만큼 반복후 종료 
    
        if (i <= imax2 - 1) {
            //각 글자가 초성 중성 종성 순서대로 추가되도록 
            var jmax2 = typeing2[i].length;
            resultDiv2.innerHTML = text + typeing2[i][j];
            j++;
            if (j == jmax2) {
                text += typeing2[i][j - 1]; //초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
                i++;
                j = 0;
            }
        } else {
            clearInterval(inter);
        }
    }
}

$(function () {
    scrollGnbFnc();
    allmenuFnc();
    stringEffectFnc();
});