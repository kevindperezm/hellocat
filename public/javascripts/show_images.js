imageCounter = 0;
imageList = [];
imageInterval = 50;

$(document).ready(function(e){
	imageList = $(".gallery img"); 
	// setTimeout(showImage, imageInterval);
	imageList.on("load", showImage);
});

function showImage() {
	// if (imageCounter < imageList.length) {
		// $(imageList[imageCounter++])
		$(this).css("opacity", 1);
		// setTimeout(showImage, imageInterval);
	// }
}