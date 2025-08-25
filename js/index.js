// 等页面加载完成之后在执行
$(function() {
	//类选择器选择所有.flexslider进行函数
		$(".flexslider").flexslider({
			slideshowSpeed: 4000, //展示时间间隔ms
			animationSpeed: 400, //滚动时间ms
			touch: true //是否支持触屏滑动
		});
});
	// \对四个照片的了解我们进行设置
$('#btn-1').click(function() {
	// 
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top    //函数参数第一个是滑到这个按钮所在的地方 第二个按钮是滑动的时间
	}, 500);
	return false;
});

$('#btn-2').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500);
	return false;
});

$('#btn-3').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 800);
	return false;
});

$('#btn-4').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500);
	return false;
});