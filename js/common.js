
$(document).ready(function(){
    $('#menu1,#menu2,#menu3,#menu4,#menuSolve').tendina({
        openCallback: function(clickedEl) {
            clickedEl.addClass('opened');
        },
        closeCallback: function(clickedEl) {
            clickedEl.addClass('closed');
        }
    });
 
	
	$("#menu li a.firsta").click(function(){

			var status=$(this).next("ul").css("display");
			var firstchild_a=$(this).find("i");
			var all_lis=$(this).parents("ul").find("a.firsta i");
			all_lis.removeClass("xlcddown");
			all_lis.addClass("xlcd");
				
			if(status=="none"){
				firstchild_a.removeClass("xlcd");
				firstchild_a.addClass("xlcddown");
			}else{
				firstchild_a.removeClass("xlcddown");
				firstchild_a.addClass("xlcd");	
			}
		
		});
});

$(function(){
	
	$("#menu li.menu-list>ul>li").click(function(){
		$("#menu li.menu-list>ul>li").find("a").removeClass("specialclass");
		$(this).find("a",this).addClass("specialclass");
		
	})
})
	

