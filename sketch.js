

var snow =[];

function setup(){
createCanvas (800,800);
noStroke();
smooth ();

}

function draw(){
background(50);

if (frameCount % 60) {
snow.push(new Snow);
}

for(var i = 0; i < snow.length; i++){
 snow[i].display();  }

if (mouseIsPressed){
  background(255);

  fill (250,200,0);
  quad (420,90, 480,90,520,190,460,190);
  quad( 520,190,460,190,420,290,480,290);
  triangle (420,290,480,290,460,440);
}

fill(255)
circle(70,90,100);
ellipse(110,80,100,120);
circle(160,90,100);

ellipse(320,90,150,100);
ellipse(370,80,100,120);
ellipse(420,90,150,100);

circle(570,90,100);
ellipse(610,80,100,120);
circle(660,80,120);
circle(710,90,100);
}
function Snow(){
this.xPos = random( width);
this.cSize = random (2,20);
this.yPos = 100 + this.cSize;
this.cSpeed = 5;

this.display = function () {

this.yPos = this.yPos + this.cSpeed; 
fill(100,200,250);
circle(this.xPos,this.yPos, this.cSize);

  }

 
}