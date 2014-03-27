$(document).ready(function(e){
	function showImage() {
		$(this).css("opacity", 1);
	}

	function errorImage() {
		$(this).attr("src", "/images/imageNotFound.jpg");
		showImage();	
	}

	var imageList = $(".gallery img"); 
	imageList.on("load", showImage)
	.on("error", errorImage);
});