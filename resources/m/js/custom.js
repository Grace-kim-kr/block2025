$(function(){

    //datepicker
    $('.datepicker, #datepicker').pickadate({
        format: "yyyy-mm-dd",
        labelMonthNext: '다음달로 이동',
        labelMonthPrev: '이전달로 이동',
        labelMonthSelect: 'Pick a month from the dropdown',
        labelYearSelect: 'Pick a year from the dropdown',
        selectMonths: true,
        selectYears: true,
    });

    //filebox
	var fileTarget = $('.filebox .upload-hidden');
	fileTarget.on('change', function(){ // 값이 변경되면
		if(window.FileReader){ // modern browser
			var filename = $(this)[0].files[0].name; } else { // old IE
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
		} // 추출한 파일명 삽입
		$(this).siblings('.upload-name').val(filename);
	});

});
    
$(document).ready(function(){
         // 레이어팝업
        $('.openPop').click(function(){
            $('.popup_wrap').css('display','flex');
            $('body').addClass('fixed');
            $('body').on('scroll touchmove mousewheel', function(e){
                e.preventDefault();
            });
        });
        $('.closePop').click(function(){
            $('.popup_wrap').css('display','none');
            $('body').removeClass('fixed');
            $('body').off('scroll touchmove mousewheel');
        });

        // 모바일 사이드 메뉴
        $('.menu_btn').on('click', function(){
            $('#menu').addClass('on');
            $('.menu_dim').fadeIn(500);
        });
        $('.close_btn').on('click', function(){
            $('.menu_dim').fadeOut(500);
            $('#menu').removeClass('on');
        });
        $('.menu_dim').on('click', function(){
            $('.menu_dim').fadeOut(500);
            $('#menu').removeClass('on');
        });

        // 높이 체크
        $('body').height($(window).height());

});



