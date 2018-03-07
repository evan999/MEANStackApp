var filename = "index.js";

var hello = function(name){
	console.log("Hello " + name);
};

var intro = function(name){
	console.log("I'm a node file called " + filename);
};

module.exports= {
	hello : hello,
	intro: intro
};