$(function () {
    // 메인영상효과 =================
    var scrollChanged = false;
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop(); 
        if (scrollTop > 0 && !scrollChanged) {
            scrollChanged = true;
            $('video').css({
                'mask-size': '2000%',
                'mask-position' : '-100px -140px'
            });
            $('video').css({
                '-webkit-mask-size': '2000%',
                '-webkit-mask-position' : '-100px -140px'
            });
        }
        else if (scrollTop === 0 && scrollChanged) {
            scrollChanged = false;
            $('video').css({
                'mask-size': '50%',
                'mask-position' : 'center'
            });
            $('video').css({
                '-webkit-mask-size': '50%',
                '-webkit-mask-position' : 'center'
            });
        }
        
        if($(window).scrollTop() > 300){
            $('.content').css({
                'background' : 'rgba(255,255,255,0.6)'

            })
            $('.content *').css({
                'opacity': '1',
                'visibility' : 'visible'
            })
        }else {
            $('.content').css({
                'background' : 'rgba(255,255,255,0)'
            })
             $('.content *').css({
                'opacity': '0',
                'visibility' : 'hidden'
            })
        }
    });
    

    // 메뉴 효과 ============================
    const menu = $('.menu ul li'),
          contents = $('.menusection > section')
    menu.click(function(e){
        e.preventDefault();
        $(this).stop().addClass('on').siblings().stop().removeClass('on')

        let idx = $(this).index();
        let section = contents.eq(idx)
        let sectionDistance = section.offset().top
        $('html, body').animate({
            scrollTop : sectionDistance
        },300)
    })

    // 윈도우를 스크롤 했을 때
    $(window).scroll(function(){
        contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()) {
                let idx = $(this).index()
                menu.stop().removeClass('on').eq(idx).stop().addClass('on')
            }
        })
    })
})