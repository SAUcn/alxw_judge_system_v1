/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2016-05-31 09:32:09
        Filename: theme/snow drop/js.js
        Description: Created by SpringHack using vim automatically.
**/
$(function () {
		var list = $("table");
		list.each(function () {
				if ($(this).attr("data-type") != "rank")
					$(this).addClass("menu");
			});
		$(document.body).append("<center><br /><h5><a href='http://www.90its.cn/' target='_blank' style='color: #000000;'>Designed by SpringHack in Cello Studio</a></h5></center>");
		$('.navigator.contest').css('padding-bottom', '20px').parent().css('padding-bottom', '40px')
	});

$(function(){
  			var d="<div class='snow'>❅<div>"
			var timer = setInterval(function () {
				var f = $(document).width();
				var e = Math.random()*f - 100;
				var o = 0.3 + Math.random();
				var fon = 1 + Math.random()*20;
				var l  =  e - 100 + 200 * Math.random();
				var k = 2000 + 5000 * Math.random();
				$(d).clone().appendTo($(document.body)).css({
					left: e + "px",
					opacity: o,
					"font-size": fon,
				}).animate({
				  top: $(document.body).height(),
					left: l + "px",
					opacity: 0.1,
				},k, "linear", function () {$(this).remove()})
			},200)
			window.stopSnow = function () {
				clearInterval(timer);
				$('.snow').remove();
			};
});
