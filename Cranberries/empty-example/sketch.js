//http-server -c-1

var victimImg;
var paintWidth = 7;

var canvasX = 1050;
var canvasY = 1034; //448 

var dripXStart = 10;
var dripXLimit = 1040; //x coordinate of when the drip area should stop

//limits area where the drip can start on the y
var yStartStart = 5; 
var yStartLimit = 900;

var depthLimit = canvasY - 20; //lowest point it can fall to 
var lengthLimit = 100; //length of stream 

var victim;

function setup() {
	createCanvas(canvasX, canvasY);
	victimImg = loadImage('../media/cranberries4.png');
	victim = new Victim(0, 0);
}

function draw() {
	clear();
	victim.display();
} 

setTimeout(function(){
	victim.prepStreams();
}, 2000);


function Victim(x, y){
	this.x = x; //top left corner 
	this.y = y; //top left corner 
	var el = this;
	var streams = []; //each image has an array with streams

	this.display = function(){
		image(victimImg, 0, 0);
		this.paint();
	}

	this.prepStreams = function(){ 

		image(victimImg, 0, 0);
		var lastStreamDepth = Math.floor(Math.random() * (100 - 20 + 1)) + 20; //random initial start for first stream 

		for(var i = dripXStart; i < dripXLimit - paintWidth; i = i + 5){ //for all places horizontally 

			//generates random width of the paint drip
			paintWidth = (Math.floor(Math.random() * (10 - 6 + 1)) + 6); 

			var yStart = (Math.floor(Math.random() * (yStartLimit - yStartStart + 1)) + yStartStart); 

			//calculates the length of the stream 
			var maxDepth = 0;
			while(maxDepth < 1){
				var distanceTraversed = Math.floor(Math.random() * (300 - lengthLimit + 1)) + lengthLimit;
				if(yStart + distanceTraversed < depthLimit){
					maxDepth = distanceTraversed;
				}
			}

			var streamX = el.x + i - 1; //x value of the stream start location
			var streamY = el.y + yStart; //y value of the stream start location
			var color = get(streamX, streamY); //gets color of that pixel 

			var newStream = new Stream(streamX, streamY, color, maxDepth, paintWidth); //creates new stream 
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