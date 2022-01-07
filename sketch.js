var pista
var pistaImg
var boy
var boyRunner
var limiteDir
var limiteEsq
function preload(){
  //imagens pré-carregadas
  pistaImg = loadImage("path.png");
  boyRunner = loadAnimation ("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  pista = createSprite(200,200,400,400);
  pista.addImage(pistaImg);
  boy = createSprite(200,300,40,40)
  boy.addAnimation("run",boyRunner);
  boy.scale = 0.1
  limiteDir=createSprite(1,200,5,400)
  limiteEsq=createSprite(399,200,5,400)
  limiteDir.visible = false;
  limiteEsq.visible = false;
}

function draw() {
  background(0);
  pista.velocityY = 2
  if (pista.y>400) {
    pista.y=200
  }
  boy.x=mouseX
  boy.collide(limiteDir);
  boy.collide(limiteEsq);
  drawSprites();
}
