var kitsuneImg;
var paintWidth = 7;

var maskX = 374;
var maskY = 616;

var canvasX = 550; //500
var canvasY = 749; //717

var kitsune;

function setup() {
	createCanvas(canvasX, canvasY);
	kitsuneImg = loadImage('../media/Kitsune2.png');
	kitsune = new Kitsune(0, 0);
}

function draw() {
	clear();
	kitsune.display();
} 

setTimeout(function(){
	kitsune.prepStreams();
}, 2500);


function Kitsune(x, y){
	this.x = x; //top left corner 
	this.y = y; //top left corner 
	var el = this;
	var streams = []; //each image has an array with streams

	this.display = function(){
		image(kitsuneImg, 0, 0);
		this.paint();
	}

	this.prepStreams = function(){ 

		image(kitsuneImg, 0, 0);
		var lastStreamDepth = Math.floor(Math.random() * (100 - 20 + 1)) + 20; //random initial start for first stream 

		for(var i = 1; i < maskX - paintWidth; i = i + 5){ //for all places horizontally 

			//generates random width of the paint drip
			paintWidth = (Math.floor(Math.random() * (10 - 6 + 1)) + 6); 

			//generates random number of where each stream starts 
			var yStartStart = 25;
			var yStartLimit = 120;
			var yStart = (Math.floor(Math.random() * ((maskY-yStartLimit) - yStartStart + 1)) + yStartStart); 

			var depthLimit = canvasY - 20;
			var lengthLimit = 100;

			//calculates the length of the stream 
			var maxDepth = 0;
			while(maxDepth < 1){
				var distanceTraversed = Math.floor(Math.random() * (300 - lengthLimit + 1)) + lengthLimit;
				if(yStart + distanceTraversed < depthLimit){
					maxDepth = distanceTraversed;
				}
			}

			var imgX = el.x + i - 1; //x value of the stream start location 
			var imgY = el.y + yStart; //y value of the stream start location
			var color = get(imgX, imgY); //gets color of that pixel 

			var newStream = new Stream(imgX, imgY, color, maxDepth, paintWidth); //creates new stream 
			streams.push(newStream);
		}	

		setInterval(function(){
			for(var i = 0; i < streams.length; i++){
				streams[i].increaseCurrent();
			}
		}, 200);
	}

	this.paint = function(){
		for(var i = 0; i < streams.length; i++){
			streams[i].paintDrip();
		}
	}
}

function Stream(x, y, color, maxDepth, paintWidth){
	this.currentDepth = 0;
	this.color = color;
	this.x = x;
	this.y = y;
	this.maxDepth = maxDepth;
	this.paintWidth = paintWidth;

	var el = this;

	this.increaseCurrent = function(){
		if(el.currentDepth <= el.maxDepth){
			var addition = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
			el.currentDepth += addition;
		}
	}

	//repaints it every time
	this.paintDrip = function(){
		var cornerRadius = 20;

		stroke(el.color);
		fill(el.color);
		rect(el.x, el.y, this.paintWidth, el.currentDepth, cornerRadius, cornerRadius, cornerRadius, cornerRadius);
	}
}