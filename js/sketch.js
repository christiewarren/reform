let scl = 10;

let htmlCanvas = document.getElementById('canvas');
let width = htmlCanvas.clientWidth;
let height = htmlCanvas.clientHeight;

function setup(){
   let canvas = createCanvas(width, height);
   canvas.parent('canvas');
 }

 function windowResized(){
  width = htmlCanvas.clientWidth;
  height = htmlCanvas.clientHeight;
  resizeCanvas(width,height);
}

window.onresize = windowResized;

 
 function draw(){
   stroke(247, 247, 247);
   background(36, 31, 33);
   noFill();
   frameRate(60);
   strokeWeight(1);
   //curves require additional points to tell how to enter & exit the curve

   //make a vertical line every scl pixels across entire canvas
   for(let x = -50; x <= width+100; x += scl){
     beginShape();
       curveVertex(mouseX*(x/200), mouseY); //enter curve point
       curveVertex(x, 0);             //top point
       //curveVertex(x, height/2);    //midpoint
       curveVertex(x, height);        //bottom point
       curveVertex(mouseX, mouseY);   //exit curve point
     endShape();
   }
   
   //make a horizontal line every scl pixels across entire canvas
   for(let y = -50; y <= height+100; y += scl){
     beginShape();
     curveVertex(mouseX, mouseY*(y/200));   //enter curve point
     curveVertex(0, y);             //left point
     //curveVertex(width/2, y);     //midpoint
     curveVertex(width, y);         //right point
     curveVertex(-mouseX, -mouseY); //exit curve point
     endShape();
   }
 }