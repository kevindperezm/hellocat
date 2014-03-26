page = 0;
var origin = "http://www.animekc.com/forums/images/wallpapers/Wallpaper";

exports.list = function(req, res) {
	page = req.params.page;
	var itemsPerPage = 30;
	var imagenes = [];
	
	/* Cargar las imagenes en el array */
	// var fs = require('fs');
	// var files = fs.readdirSync('public/images/');

	var i = 1;
	var dest = page * itemsPerPage;
	if (page > 1) {
		i = (page - 1) * itemsPerPage + 1;
		dest = page * itemsPerPage;
	}
	// console.log("begin = "+i);
	// console.log("dest = "+dest);
	while (i <= dest) {
		// console.log(i);
		// var file = files[i];
		var file = i+'.jpg';
		// var regexp = /^img[0-9].*\.jpg$/;
		if (/*regexp.test(file)*/ true) {
			imagenes.push(file);
		}
		i++;
	}

	knuth = require("includes/knuth-shuffle");
	imagenes = knuth.knuthShuffle(imagenes.slice(0));

	// console.log(imagenes);
	res.render('gallery', { title: 'HelloCat', imagenes: imagenes, origin: origin});
}

exports.show = function(req, res) {
	res.render("show", {image: req.params.id+".jpg", page: page, origin:"http://www.animekc.com/forums/images/wallpapers/Wallpaper"});
}