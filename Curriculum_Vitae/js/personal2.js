

//footer
window.onload = function(){
	var content = document.getElementById('content');
		var selectImg = document.getElementById('selectImg');
		var selectItem = document.getElementById('selectItem');
		selectImg.onclick = function () {
		   // console.log(selectItem.style.display);
			if(selectItem.style.display == 'none' || selectItem.style.display == ''){
				selectItem.style.display = 'block';
			}else{
				selectItem.style.display = 'none';
			}
	
		}			 	
		content.onclick = function () {
			if(selectItem.style.display == 'none' || selectItem.style.display == ''){
				selectItem.style.display = 'block';
			}else{
				selectItem.style.display = 'none';
			}
		}			 	
		var lis = selectItem.getElementsByTagName('li');
	
		for(var i = 0; i < lis.length; i++){
			content.innerText = lis[0].innerHTML;
			lis[i].onclick = function () {			
				content.innerText = this.innerHTML;
				selectItem.style.display = 'none';
			}
			
			}
					
}
$(function(){
	$(".da .b").click(function(){
		$("#ztdx p").css({fontSize:"20px"})
	})
	$(".zhong .b").click(function(){
		$("#ztdx p").css({fontSize:"18px"})
	})
	$(".xiao .b").click(function(){
		$("#ztdx p").css({fontSize:"16px"})
	})
})
  

