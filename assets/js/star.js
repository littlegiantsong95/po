$(function(){
    var swiper=new Swiper('.swiper-container',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },
        //parallax 활성화
        parallax: true,
        //수직방향
        direction: 'vertical',
    });
    //각 슬라이드의 배경색을 배열에 담기
    var bg=['#25064c','#35064c','#68564c','#25060b','#25524c','#69864a'];
    

    //슬라이드가 전환되는 이벤트 부여
    swiper.on('slideChange',function(){
        //현재 활성화되어있는 인덱스 구하기
        var activeIndex=swiper.activeIndex;
        console.log('현재인덱스',activeIndex);
        // 1. 방법 1: 슬라이드가 전환이 되면 바운스 효과와 메세지 제거
        if(activeIndex!=0){
            $('.swiper-button-next').removeClass('bounce').find('strong').remove();
        }
        //슬라이드가 전환되면 각 슬라이드의 배경색으로 변경
        $('.parallax-bg').css('background', bg[activeIndex]);

        //별의 이동
        starMove();
    })
    //별 생성하기 -최초에 한번만 실행(반복문 사용)
    var starLength=50;
    for(var i=0; i<starLength; i++){
        if(i%2==0){//짝수번째는 솔리드별
            $('.parallax-bg').append('<i class="fa fa-star star"></i>');
        }else{//홀수번째는 테두리별
            $('.parallax-bg').append('<i class="fa fa-star star1"></i>');

        }
    }

    //별의 위치 이동-백개 별을 개별적으로 이동
    function starMove(){
        for(var i=0; i<starLength; i++){
            //별이 이동할 수 있는 최대값을 구하기
            var maxX=$('.parallax-bg').width();
            var maxY=$('.parallax-bg').height();

            //별이 이동하는 위치값을 랜덤으로 구하기
            var x=Math.floor(Math.random()*maxX); //0~maxX-1
            var y=Math.floor(Math.random()*maxY);
            console.log(x,y);

            //별의 색상 랜덤
            // var r=Math.floor(Math.random()*256); //0~255
            // var g=Math.floor(Math.random()*256);
            // var b=Math.floor(Math.random()*256);
            
            //별의 색상 랜덤(노랑색 주로)
            var r=255; //255
            var g=Math.floor(Math.random()*63)+193;//193~255
            var b=Math.floor(Math.random()*256);//0~255

            //별의 크기 랜덤
            var size=Math.floor(Math.random()*10)+5;//0~9 -> 최소 5부터 최대14까지

            //별의 위치 뿌리기
            $('.parallax-bg i').eq(i).css({
                'left':x,
                'top':y,
                //rgb(0,0,0)
                'color':'rgb('+r+','+g+','+b+')',
                'fontSize':size,
            })
        }
    }
    //최초에 함수 한번 수행(해보기)
    // starMove();

    //화면의 크기가 변경될 때마다 
    $(window).resize(function(){
        //별 이동시키기
        starMove();
    }).resize();
})