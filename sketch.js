function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0,0,0);
  frameRate(30);
}


function draw() {
  
    //CERCHIO SX
    push(); 
  translate(250,250);
  rotate(180);
  stroke(0);
  stroke(lerpColor(color('#94AC3C'),color('#295BA7'),frameCount/120));
  line(150,0,cos(frameCount*3)*150,sin(frameCount*3)*150);
     pop();
  

  //CERCHIO DX
    push(); 
  translate(250,250);
  stroke(0);
  stroke(lerpColor(color('#FF4275'),color('#38AD12'),frameCount/120));
  line(150,0,cos(frameCount*3)*150,sin(frameCount*3)*150);
     pop();
     

  //C1
     push();
  translate(0,0);
  stroke(0);
  stroke(0,239,253);
  line(0,-250,cos(frameCount*3)*250,-1*sin(frameCount*3)*250);
     pop();
     
  //C2  
    push();
  translate(500,0);
  stroke(0);
  stroke(238,238,238);
  line(0,-250,-1*cos(frameCount*3)*250,-1*sin(frameCount*3)*250);
    pop();
    
  //C3    
    push();
  translate(0,500);
  stroke(0);
  stroke(238,238,238);
  line(0,250,cos(frameCount*3)*250,sin(frameCount*3)*250);
    pop();
    
  //C4  
    push();
  translate(500,500);
  stroke(0);
  stroke(0,239,253);
  line(0,250,-1*cos(frameCount*3)*250,sin(frameCount*3)*250);
    pop();
  
  
   if(frameCount==120){
    noLoop();
  }


}