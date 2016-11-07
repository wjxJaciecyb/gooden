//顶部
$(document).ready(function(){
	
		$(".current-menu-item").hover(function(){
			var index=$(this).index();
			$(".current-menu-item").eq(index).css({"background":"#79BE0B","color":"#fff"})
			$(".current-menu-item>.one").eq(index).css({"background":"#FAFAFA","color":"#79BE0B","display":"block","z-index":"9999999"})
		},function(){
			var index=$(this).index();
			$(".current-menu-item").eq(index).css({"background":"#fff","color":"#1E1E1E"})
			$(".current-menu-item>.one").eq(index).css({"background":"#fff","color":"#818181","display":"none"})
		})
	
})


// 选项卡
$(document).ready(function(){
	$(".tabs-nav .active").click(function(){
		var index=$(this).index();
		$(".tabs-nav .active").removeClass("tab2").eq(index).addClass("tab2");
		$(".tabs-container .tab-content").removeClass("tab1").eq(index).addClass("tab1");
	})
})