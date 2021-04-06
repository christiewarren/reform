var squareSketch = function (square) {

  square.setup = function(){
    square.scl = 10;
    square.htmlCanvas = document.getElementById('squareSketch');
    square.width = square.htmlCanvas.clientWidth;
    square.height = square.htmlCanvas.clientHeight;
    square.canvas = square.createCanvas(square.width, square.height);
    square.canvas.parent('squareSketch');
  }

  square.windowResized = function() {
    square.width = square.htmlCanvas.clientWidth;
    square.height = square.htmlCanvas.clientHeight;
    square.resizeCanvas(square.width,square.height);
  }
  window.onresize = square.windowResized;

  square.draw = function(){
    square.stroke(247, 247, 247);
    square.background(36, 31, 33);
    square.noFill();
    square.frameRate(60);
    square.strokeWeight(1);
    //curves require additional points to tell how to enter & exit the curve

    //make a vertical line every scl pixels across entire canvas
    for(let x = -50; x <= square.width+100; x += square.scl){
      square.beginShape();
        square.curveVertex(square.mouseX*(x/200), square.mouseY); //enter curve point
        square.curveVertex(x, 0);             //top point
        //curveVertex(x, height/2);    //midpoint
        square.curveVertex(x, square.height);        //bottom point
        square.curveVertex(square.mouseX, square.mouseY);   //exit curve point
      square.endShape();
    }
    
    //make a horizontal line every scl pixels across entire canvas
    for(let y = -50; y <= square.height+100; y += square.scl){
      square.beginShape();
        square.curveVertex(square.mouseX, square.mouseY*(y/200));   //enter curve point
        square.curveVertex(0, y);             //left point
      //curveVertex(width/2, y);     //midpoint
        square.curveVertex(square.width, y);         //right point
        square.curveVertex(-square.mouseX, -square.mouseY); //exit curve point
      square.endShape();
    }
  }
}
let p5Square = new p5(squareSketch);

//  concept

var conceptSketch = function (concept) {

  concept.setup = function(){
    concept.scl = 40;
    concept.htmlCanvas = document.getElementById('conceptSketch');
    concept.width = concept.htmlCanvas.clientWidth;
    concept.height = concept.htmlCanvas.clientHeight;
    concept.canvas = concept.createCanvas(concept.width, concept.height);
    concept.canvas.parent('conceptSketch');
  }

  concept.windowResized = function() {
    concept.width = concept.htmlCanvas.clientWidth;
    concept.height = concept.htmlCanvas.clientHeight;
    concept.resizeCanvas(concept.width,concept.height);
  }
  window.onresize = concept.windowResized;

  concept.draw = function(){
    concept.stroke(247, 247, 247);
    concept.background(36, 31, 33);
    concept.noFill();
    concept.frameRate(60);
    concept.strokeWeight(1);
    //curves require additional points to tell how to enter & exit the curve

    //make a vertical line every scl pixels across entire canvas
    for(let x = -50; x <= concept.width+100; x += concept.scl){
      concept.beginShape();
        concept.curveVertex(concept.mouseX*(x/200), concept.mouseY); //enter curve point
        concept.curveVertex(x, 0);             //top point
        //curveVertex(x, height/2);    //midpoint
        concept.curveVertex(x, concept.height);        //bottom point
        concept.curveVertex(concept.mouseX, concept.mouseY);   //exit curve point
      concept.endShape();
    }
    
    //make a horizontal line every scl pixels across entire canvas
    for(let y = -50; y <= concept.height+100; y += concept.scl){
      concept.beginShape();
        concept.curveVertex(concept.mouseX, concept.mouseY*(y/200));   //enter curve point
        concept.curveVertex(0, y);             //left point
      //curveVertex(width/2, y);     //midpoint
        concept.curveVertex(concept.width, y);         //right point
        concept.curveVertex(-concept.mouseX, -concept.mouseY); //exit curve point
      concept.endShape();
    }
  }
}
let p5concept = new p5(conceptSketch);