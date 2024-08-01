//apertar control f5 prra recaregar de vdd
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raiobolinha = tamBolinha/2;
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;
let xvelo= 6;
let yvelo= 6;
let mortes = 0;
let pontos = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(140,255,255); 
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
    Borda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    MovimentaRaquete();
    colideRaquete();
    mostraPlacar();
}

function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

function moveBolinha(){
    xBolinha = xvelo + xBolinha;
    yBolinha = yvelo + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelo *= -1;
        if (xBolinha < 0) {
          mortes++;
        }
    }
    if (yBolinha > height || yBolinha < 0){
        yvelo *= -1;
    }
}

function criaRaquete(xRaquete,yRaquete,larguraRaquete,alturaRaquete){
    fill("blue");
    rect(xRaquete,yRaquete,larguraRaquete,alturaRaquete);
}

function MovimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
      yRaquete -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
      yRaquete +=10;
  }
}

function colideRaquete(){
    if(xBolinha - raiobolinha < xRaquete + larguraRaquete && yBolinha - raiobolinha < yRaquete + alturaRaquete && yBolinha + raiobolinha > yRaquete){
        xvelo *= -1;
        pontos++;
    }
}

function mostraPlacar() {
  fill(0);
  textSize(24);
  text("Mortes: " + mortes, 10, 30);
  text("Pontos: " + pontos, 10, 60);
}