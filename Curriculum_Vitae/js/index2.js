

  

$(function(){
	$(function(){
		var $tit = $(".content .nameList li");
		
		var index = 0;
		$tit.click(function(){
			index = $(this).index();
			$(this).addClass("on").parent().siblings().find("li").removeClass("on")
			
		})
	})
})