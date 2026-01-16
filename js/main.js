$(function () {
    $('.hoop .button').mouseenter(function () {
        $('.hoop .edge span').stop().css({
            width: 80,
            height: 80,
        })
    })
    $('.hoop .button').mouseleave(function () {
        $('.hoop .edge span').stop().css({
            width: 50,
            height: 50,
        })
    })


    // teacher 페이지
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 10;
        let mouseY = e.pageY + 10;

        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    })
    $('.link').click(function () {
        $('.popupbox').fadeToggle()
    })
    $('.popupbox .button').click(function () {
        $('.popupbox').fadeOut()
    })
    const texts = [
        '분위기는 가볍게',
        '결과물은 무겁게'
    ];

    const target = document.getElementById('text');
    let index = 0;

    function showText(text) {
        target.innerHTML = '';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            span.style.animationDelay = `${i * 0.1}s`;
            target.appendChild(span);
        });
    }

    function loop() {
        showText(texts[index]);
        index = (index + 1) % texts.length;
    }

    loop();
    setInterval(loop, 3000);


    $(window).scroll(function () {
        $('.wwws').each(function () {
            let sectionH = $(this).offset().top - 300
            let text = $(this).data('text')
            let sub = $(this).data('sub')
            if ($(window).scrollTop() > sectionH) {
                $('.change-text').text(text)
                $('.sub').text(sub)
            }
        })
    })

    const portfolioData = [
        {
            title: '박규리 포트폴리오',
            link: 'https://rriiweb.github.io/portfolio/',
            img: 'images/박규리.png'
        },
        {
            title: '박지연 포트폴리오',
            link: 'https://jiyeon0625.github.io/PORTFOLIO/',
            img: 'images/박지연.png'
        },
        {
            title: '박시진 포트폴리오',
            link: 'https://tlwls0902-star.github.io/sijinpofo/',
            img: 'images/박시진.png'
        },
        {
            title: '김민지 포트폴리오',
            link: 'https://kimmindi.github.io/PORTFOLIO/',
            img: 'images/김민지.png'
        },
        {
            title: '최보예 포트폴리오',
            link: 'https://bowyeah-ux.github.io/portfolio/',
            img: 'images/최보예.png'
        },
        {
            title: '김다예 포트폴리오',
            link: 'https://flfkrznakdi-bit.github.io/portfolio/',
            img: 'images/김다예.png'
        },
        {
            title: '문수빈 포트폴리오',
            link: 'https://aik521837.github.io/pof/',
            img: 'images/문수빈.png'
        },
        {
            title: '김유경 포트폴리오',
            link: 'https://kimyukyung79.github.io/portfolio/',
            img: 'images/김유경.png'
        },
        {
            title: '최유림 포트폴리오',
            link: 'https://yurimchoe.github.io/portfolio/',
            img: 'images/최유림.png'
        },
        {
            title: '박은진 포트폴리오',
            link: 'https://quartz952982-cmd.github.io/PORTFOLIO/',
            img: 'images/박은진.png'
        },
        {
            title: '박수진 포트폴리오',
            link: 'https://subong9469-arch.github.io/moive/',
            img: 'images/박수진.png'
        },
        {
            title: '이민영 포트폴리오',
            link: 'https://minyounglee01.github.io/pf/',
            img: 'images/이민영.png'
        },
        {
            title: '윤혜수 포트폴리오',
            link: 'https://noteyune-prog.github.io/YUN-hyesoo/',
            img: 'images/윤혜수.png'
        },
        {
            title: '류가현 포트폴리오',
            link: 'https://ryu-ga-hyun.github.io/portfolio/',
            img: 'images/류가현.png'
        },
        {
            title: '한서윤 포트폴리오',
            link: 'https://seoyoon306978.github.io/syportfolio/',
            img: 'images/한서윤.png'
        },
        {
            title: '한은지 포트폴리오',
            link: 'https://eeeeeeunz.github.io/portfolio/',
            img: 'images/한은지.png'
        },
        {
            title: '신연정 포트폴리오',
            link: 'https://yeonjeong98.github.io/Portfolio2/',
            img: 'images/신연정.png'
        },
        {
            title: '정희진 포트폴리오',
            link: 'https://zzins96.github.io/heejin/',
            img: 'images/정희진.png'
        },
        {
            title: '홍은빈 포트폴리오',
            link: 'https://hongeunbin1297-bit.github.io/hongeunbin-portpolio/',
            img: 'images/홍은빈.png'
        },
        {
            title: '이승재 포트폴리오',
            link: 'https://cook2ie.github.io/port/',
            img: 'images/이승재.png'
        },
        {
            title: '권효민 포트폴리오',
            link: 'https://khm061212.github.io/portfolio/',
            img: 'images/권효민.png'
        },
        {
            title: '윤정민 포트폴리오',
            link: 'https://yunjeongmin405.github.io/portfolio/',
            img: 'images/윤정민.png'
        },
        {
            title: '김유영 포트폴리오',
            link: 'https://uouo2.github.io/portfolio/',
            img: 'images/김유영.png'
        },
        {
            title: '박미경 포트폴리오',
            link: 'https://memi919.github.io/MiKyung-portfolio/',
            img: 'images/박미경.png'
        },
        {
            title: '이나영 포트폴리오',
            link: 'https://meeterno.github.io/leenayeong_portfolio/',
            img: 'images/이나영.png'
        },
        {
            title: '정현지 포트폴리오',
            link: 'https://junghyunji-korean.github.io/portfolio-jhj/',
            img: 'images/정현지.png'
        },
        {
            title: '최슬기 포트폴리오',
            link: 'https://seulgi-choe.github.io/seulport/',
            img: 'images/최슬기.png'
        },
        {
            title: '장지민 포트폴리오',
            link: 'https://odddim.github.io/portfolio/',
            img: 'images/장지민.png'
        },
        {
            title: '홍세흔 포트폴리오',
            link: 'https://hong-sehun.github.io/sehunportfolio/',
            img: 'images/홍세흔.png'
        },
        {
            title: '장선형 포트폴리오',
            link: 'https://tjsgud125.github.io/Portfolio/',
            img: 'images/장선형.png'
        },
        {
            title: '신혜원 포트폴리오',
            link: 'https://hh000213.github.io/shinhyewon/',
            img: 'images/신혜원.png'
        },
        {
            title: '성보경 포트폴리오',
            link: 'https://bk0324.github.io/BK-S-PORTFOLIO/',
            img: 'images/성보경.png'
        },
        {
            title: '문선영 포트폴리오',
            link: 'https://younnge.github.io/PORTFOLIO-Pver/',
            img: 'images/문선영.png'
        },
        {
            title: '김남엽 포트폴리오',
            link: 'https://kimnamyoup.github.io/portfolio2/',
            img: 'images/김남엽.png'
        },
        {
            title: '권지혜 포트폴리오',
            link: 'https://jjyeroro.github.io/preportfolio/',
            img: 'images/권지혜.png'
        },
        {
            title: '류창엽 포트폴리오',
            link: 'https://ryu11122.github.io/portfolio/',
            img: 'images/류창엽.png'
        },
        {
            title: '강노아 포트폴리오',
            link: 'https://develop-coco.github.io/port0212/',
            img: 'images/강노아.png'
        },
        {
            title: '이가형 포트폴리오',
            link: 'https://gahyeong0.github.io/pp/',
            img: 'images/이가형.png'
        },
        {
            title: '한상준 포트폴리오',
            link: 'https://h-jun99.github.io/portfolio_test/',
            img: 'images/한상준.png'
        },
        {
            title: '이우진 포트폴리오',
            link: 'https://dldnwls050609.github.io/portfolio/',
            img: 'images/이우진.png'
        },
        {
            title: '진연희 포트폴리오',
            link: 'https://maezoo.github.io/portfolio/#',
            img: 'images/진연희.png'
        },
        {
            title: '양정우 포트폴리오',
            link: 'https://jw10024.github.io/jw/#page2',
            img: 'images/양정우.png'
        },
        {
            title: '김은경 포트폴리오',
            link: 'https://ungyoung88.github.io/portfolio/',
            img: 'images/김은경.png'
        },
        {
            title: '손지연 포트폴리오',
            link: 'https://sson-s.github.io/PORTFOLIO-SJY/',
            img: 'images/손지연.png'
        },
        {
            title: '임예나 포트폴리오',
            link: 'https://mongzzoman.github.io/portfolio-deblisher/',
            img: 'images/임예나.png'
        },
        {
            title: '이윤지 포트폴리오',
            link: 'https://haru0027.github.io/portfolio/',
            img: 'images/이윤지.png'
        },
        {
            title: '이영현 포트폴리오',
            link: 'https://theclovercollector.github.io/portfolio/',
            img: 'images/이영현.png'
        },
        {
            title: '이연수 포트폴리오',
            link: 'https://lyslysys.github.io/portfolio/',
            img: 'images/이연수.png'
        },
        {
            title: '이병림 포트폴리오',
            link: 'https://designbry.github.io/lbrportfolio/',
            img: 'images/이병림.png'
        },
        {
            title: '오현준 포트폴리오',
            link: 'https://ohhyunjoon.github.io/portfolio/',
            img: 'images/오현준.png'
        },
        {
            title: '석현주 포트폴리오',
            link: 'https://seokhyeonju.github.io/portfolio/',
            img: 'images/석현주.png'
        },
        {
            title: '김동우 포트폴리오',
            link: 'https://topddd.github.io/portfolio-/',
            img: 'images/김동우.png'
        },
        {
            title: '김가은 포트폴리오',
            link: 'https://kim1115.github.io/portfolio/',
            img: 'images/김가은.png'
        },
        {
            title: '신혜지 포트폴리오',
            link: 'https://24stardust.github.io/pf/',
            img: 'images/신혜지.png'
        },
        {
            title: '이홍원 포트폴리오',
            link: 'https://leehongwon.github.io/version1.2/',
            img: 'images/이홍원.png'
        },
        {
            title: '배홍규 포트폴리오',
            link: 'https://honggyuuu.github.io/portfolio3/',
            img: 'images/배홍규.png'
        },
        {
            title: '박지훈 포트폴리오',
            link: 'https://parkjihun1.github.io/port/',
            img: 'images/박지훈.png'
        },
    ];

    let currentView = 'thumb';
    let currentPage = 1;
    const listPerPage = 18;
    const thumbPerPage = 9;

    function render() {
        const perPage = currentView === 'list' ? listPerPage : thumbPerPage;
        const start = (currentPage - 1) * perPage;
        const end = start + perPage;
        const items = portfolioData.slice(start, end);

        $('.portfolio-list, .portfolio-thumb').empty();

        if (currentView === 'list') {
            $('.portfolio-list').addClass('active');
            $('.portfolio-thumb').removeClass('active');

            items.forEach(item => {
                $('.portfolio-list').append(`
                    <li>
                        <a href="${item.link}" target="_blank">${item.title}</a>
                    </li>
                `);
            });

        } else {
            $('.portfolio-thumb').addClass('active');
            $('.portfolio-list').removeClass('active');

            items.forEach(item => {
                $('.portfolio-thumb').append(`
                    <a href="${item.link}" target="_blank">
                        <img src="${item.img}" alt="${item.title}">
                    </a>
                `);
            });
        }

        renderPagination(perPage);
    }

    // 페이지네이션
    function renderPagination(perPage) {
        $('.pagination').empty();
        const totalPage = Math.ceil(portfolioData.length / perPage);

        for (let i = 1; i <= totalPage; i++) {
            $('.pagination').append(`
                <span class="${i === currentPage ? 'active' : ''}" data-page="${i}">
                    ${i}
                </span>
            `);
        }
    }

    // 이벤트
    $('.btn-list').click(function () {
        currentView = 'list';
        currentPage = 1;
        $('.view-toggle button').removeClass('active');
        $(this).addClass('active');
        render();
    });

    $('.btn-thumb').click(function () {
        currentView = 'thumb';
        currentPage = 1;
        $('.view-toggle button').removeClass('active');
        $(this).addClass('active');
        render();
    });

    $(document).on('click', '.pagination span', function () {
        currentPage = $(this).data('page');
        render();
    });

    // 초기실행
    render();

})

AOS.init({
    duration: 1000,
    once: true,
})


var colours = new Array('#fd2d2d', '#ffeb93', '#ff9c9c', 'rgb(252, 197, 197)', 'rgb(255, 216, 108)', 'rgb(255, 187, 187)'); // colours of the hearts
var minisize = 16;
var maxisize = 28;
var hearts = 18;
var over_or_under = "over";

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var herz = new Array();
var herzx = new Array();
var herzy = new Array();
var herzs = new Array();
var kiss = false;

if (typeof ('addRVLoadEvent') != 'function') function addRVLoadEvent(funky) {
    var oldonload = window.onload;
    if (typeof (oldonload) != 'function') window.onload = funky;
    else window.onload = function () {
        if (oldonload) oldonload();
        funky();
    }
}

addRVLoadEvent(mwah);

function mwah() {
    if (document.getElementById) {
        var i, heart;
        for (i = 0; i < hearts; i++) {
            heart = createDiv("auto", "auto");
            heart.style.visibility = "hidden";
            heart.style.zIndex = (over_or_under == "over") ? "1001" : "0";
            heart.style.color = colours[i % colours.length];
            heart.style.pointerEvents = "none";
            if (navigator.appName == "Microsoft Internet Explorer") heart.style.filter = "alpha(opacity=75)";
            else heart.style.opacity = 0.75;
            heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
            document.body.appendChild(heart);
            herz[i] = heart;
            herzy[i] = false;
        }
        set_scroll();
        set_width();
        herzle();
    }
}

function herzle() {
    var c;
    if (Math.abs(x - ox) > 10 || Math.abs(y - oy) > 10) {
        ox = x;
        oy = y;
        for (c = 0; c < hearts; c++) if (herzy[c] === false) {
            herz[c].firstChild.nodeValue = String.fromCharCode(9829);
            herz[c].style.left = (herzx[c] = x - minisize / 2) + "px";
            herz[c].style.top = (herzy[c] = y - minisize) + "px";
            herz[c].style.fontSize = minisize + "px";
            herz[c].style.fontWeight = 'normal';
            herz[c].style.visibility = 'visible';
            herzs[c] = minisize;
            (function (index) {
                setTimeout(function () {
                    herz[index].style.visibility = "hidden";
                    herzy[index] = false;
                }, 2000);
            })(c);
            break;
        }
    }
    for (c = 0; c < hearts; c++) if (herzy[c] !== false) blow_me_a_kiss(c);
    setTimeout("herzle()", 40);
}

document.onmousedown = pucker;
document.onmouseup = function () { clearTimeout(kiss); };

function pucker() {
    ox = -1;
    oy = -1;
    kiss = setTimeout('pucker()', 100);
}

function blow_me_a_kiss(i) {
    herzy[i] -= (herzs[i] / minisize + i % 2) * 5;
    herzx[i] += (i % 5 - 2) / 5;
    if (herzy[i] < sdown - herzs[i] || herzx[i] < sleft - herzs[i] || herzx[i] > sleft + swide - herzs[i]) {
        herz[i].style.visibility = "hidden";
        herzy[i] = false;
    }
    else if (herzs[i] > minisize + 2 && Math.random() < .5 / hearts) break_my_heart(i);
    else {
        if (Math.random() < maxisize / herzy[i] && herzs[i] < maxisize) herz[i].style.fontSize = (++herzs[i]) + "px";
        herz[i].style.top = herzy[i] + "px";
        herz[i].style.left = herzx[i] + "px";
    }
}

function break_my_heart(i) {
    var t;
    herz[i].firstChild.nodeValue = String.fromCharCode(9676);
    herz[i].style.fontWeight = 'bold';
    herzy[i] = false;
    for (t = herzs[i]; t <= maxisize; t++) setTimeout('herz[' + i + '].style.fontSize="' + t + 'px"', 60 * (t - herzs[i]));
    setTimeout('herz[' + i + '].style.visibility="hidden";', 60 * (t - herzs[i]));
}

document.addEventListener("mousemove", mouse);
document.addEventListener("touchmove", mouse, { passive: true });

function mouse(e) {
  if (e.touches && e.touches.length > 0) {
    x = e.touches[0].pageX;
    y = e.touches[0].pageY;
  } else {
    x = e.pageX;
    y = e.pageY;
  }
}


window.addEventListener("resize", set_width);

function set_width() {
    swide = window.innerWidth;
    shigh = window.innerHeight;
}

window.onscroll = set_scroll;
function set_scroll() {
    sleft = window.pageXOffset;
    sdown = window.pageYOffset;
}

function createDiv(height, width) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height;
    div.style.width = width;
    div.style.overflow = "hidden";
    div.style.backgroundColor = "transparent";
    return (div);
}
