// javascript
// hydra

var hc;
var pg;

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") });

/////////////////////////

osc(4, 0.1, 0.8).color(1.04,0, -1.1).rotate(0.30, 0.1).pixelate(2, 20).modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time)).out(o0)


/////////////////////////

function setup() {
  createCanvas(1000,1000,WEBGL);
  console.log("hola mundo");
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {
   background(0);

  noStroke();
  push();
  texture(hc);
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);
  rotateZ(frameCount*0.001);
  box(500);
  pop();

}
