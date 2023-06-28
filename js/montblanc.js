/* a링크 미구현시 경고문 출력 */
$(function(){
    $(`<div class="alert">죄송합니다. 해당페이지는 준비중입니다.</div>`).appendTo("#wrap");
    $("a[href='#']").not(".eventNone").on("click", function(e){
        e.preventDefault();
        $(".alert").stop().fadeIn(700)
        setTimeout(() => {
            $(".alert").stop().fadeOut(700);
        }, 1000);
    })
})


/* amenity tab event listener*/
let tab_menu = $('.amenity_title').find('li');
let tab_circle = $('.amenity_title').find('span');
function tab(num){
    for(let i=0; i<tab_menu.length; i++){
        if(num == i){
            tab_menu.eq(i).addClass('on');
            $('.tab_content0'+i).show();
            $('.circle0'+i).show();
        } else {
            tab_menu.eq(i).removeClass('on');
            $('.tab_content0'+i).hide();
            tab_menu.eq(i).addClass('active');  
            $('.circle0'+i).hide();
        }
        
    }
}


/* 동영상 버튼으로 시작/멈춤 */
var video = $('#mont_video');
var btn = $('#mont_btn');
    btn.click(function(){
        if(video.get(0).paused){
            video.get(0).play();
            /* 변환시키는 방법 = text(), html()이 있는데,
            태그를 인식하는 메서드는 html() [암기사항] */
            btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
        }else {
            video.get(0).pause();
            btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
        }
    });


/* faq 아코디언 */
/* 왜 next로 하면 아코디언 안됐지? */
$('.faq_text h3').on('click', function(){
    $(this).siblings('p').slideToggle();
    $(this).parent('article').siblings('article').children('p').slideUp();
});

/* gnb 햄버거누르면 gnb 보이기 */
$('header .hamburger').on('click',function(){
    $('header .gnb').css({right: 0});
});
/* 닫기 아니콘 누르면 gnb 닫기 */
$('.gnb_title span').click(function(){
    $('header .gnb').css({right: "-482px"});
});
/* gnb 아코디언 */
let ul = $('.gnb nav h3').siblings('ul')
console.log(ul.length);
$('.gnb nav h3').on('click',function(){
    if($(this).hasClass('minus')){
        $(this).removeClass('minus');
        $(this).siblings('li').slideUp().parent('ul').siblings('ul').children('li').slideUp();
    } else {
        $(this).addClass('minus');
        $(this).siblings('li').slideToggle().parent('ul').siblings('ul').children('h3').removeClass('minus').siblings('li').slideUp();
    }
});


