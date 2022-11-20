let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//Velocidade da bolinha
let VelocidadeXBolinha = 6;
let VelocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;


//variáveis raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar
let meusPontos = 0;
let pontosDoOponente = 0;

// sons do jogo 

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
   movimentaBolinha();
  verificaColisaoBorda(); 
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
} 

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
   xBolinha += VelocidadeXBolinha;
  yBolinha += VelocidadeYBolinha;
}

function verificaColisaoBorda(){
    
 if (xBolinha + raio > width || 
     xBolinha - raio < 0) {
   VelocidadeXBolinha *= -1;
 }
  if(yBolinha + raio > height || 
   yBolinha - raio < 0){
    VelocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y){
rect(x, y , raqueteComprimento , raqueteAltura);
}

function mostraRaqueteOponente(){
rect(xRaqueteOponente, yRaqueteOponente , raqueteComprimento , raqueteAltura);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
    if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y){
  colidiu =  collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    VelocidadeXBolinha *= -1;
    raquetada.play();
  }
}



function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
    if(keyIsDown(83)){
    yRaqueteOponente += 10;
}
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
