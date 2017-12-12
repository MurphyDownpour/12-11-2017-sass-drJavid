$(document).ready(function() {
	count=0;
	$slider=$("#slider");
	$sliderItems=$(".sliderItems");
	$item=$(".item")
	$left=$(".left")
	$right=$(".right")
	
	$right.click(function(event) {
		count++;
		$activeElement=$item[count]

		$sliderItems.animate({
			left: "-="+$item.width()+"px"},
			500,function(){
				$item.first().remove();
			});
		$sliderItems.width($item.width()*$item.length)
	});

	$left.click(function(event) {
		count--;
		console.log(count)
		$sliderItems.animate({
			left: "+="+$item.width()+"px"},
			500);
	});
	$slider.append("<div class='dotsPanel'></div>");
	for(i=0;i<$item.length;i++){
		$(".dotsPanel").append("<div class='dots'></div>");
	}
	$(".dots").each(function(index, el) {

		$(el).click(function(event) {
			$(".dots").each(function(index, el) {
				$(el).css("background","black")
			});
			$(this).css("background","gray")
			$sliderItems.animate({
			left:"-"+$item.width()*index+"px",

		},
			500);
		});
	});

});