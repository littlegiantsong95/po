$(function(){
    $(function(){
        $('.tab-nav li a').click(function(){
            $('.tab-nav li a').removeClass('active');
            $(this).addClass('active');
            var id=$(this).attr('href');
            $('.tab-contents .contents').hide();
            $(id).show();
    
        })
    })

    // graph높이주기
    graphHeight();
    chartHeight();
    var windowH;
    var bottomH;
    var graphH;
    var topH;
    var chartH;

    $(window).resize(function(){
        graphHeight();
        chartHeight()
    }).resize();

    // 컨텐츠 박스 높이 구하기
    function graphHeight(){
        windowH=$(window).height();
        bottomH=$('.bottomNav').outerHeight();
        graphH=windowH-bottomH-40;
        console.log(windowH,bottomH,graphH);
        $('.graph').height(graphH);
    }
    // 차트 박스 높이 구하기
    function chartHeight(){
        topH=$('.tab-contents .content').find('.top').outerHeight();
        bottomH=$('.bottomNav').outerHeight();
        chartH=graphH-(topH+bottomH+70);
        $('.chart-area').height(chartH);
    }

    // 탭컨텐츠 바꾸기
    $('.tab-nav a').click(function(e){
        e.preventDefault();
        $('.tab-nav a').removeClass('active');
        $(this).addClass('active');
        var id=$(this).attr('href');
        $('.tab-contents .content').hide();
        $(id).show();
        $('.amount-popup').show();
    })


    // 주기 그래프
    
    // 생리양 그래프

    // 팝업삭제
    $('.period-popup button').click(function(){
        $('.period-popup').remove();
    })

    $('.amount-popup button').click(function(){
        $('.amount-popup').remove();
    })


})