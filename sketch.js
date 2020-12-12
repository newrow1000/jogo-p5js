var x = 80
var y = 100
var aleatorio1 = parseInt(Math.floor(Math.random() * 9 + 1));
var aleatorio2 = parseInt(Math.floor(Math.random() * 9 + 1));
var  recebealeatorio = aleatorio1 * aleatorio2
var contador = 0
var xE = 10
var yE = 350
var opcao = 1
var tela = 0
let img
var speed = 7 
var XELI = 250
var YELI = 50
var raio1 = 20
var raio2 = 20
let cont = 0 
let contS = 0
var numero = 0
var array = []
var global = 0
var et = 100
var at = 270

var opcao = 1
var tela = 0
function preload() {
  img1= loadImage('menino feliz.jpg');
  img2= loadImage('download.jpg')
  img3= loadImage('images.jpg')
  img4=loadImage('vitoria.jpg')
}


function setup() {
  createCanvas(610, 580);
}

function draw() {
  background(220);
  image(img1, 0,0)
  if(tela==0)
  menu();
  if(tela==1)
    Jogo();
  if(tela==2)
    Instruções();
  if(tela==3)
  Créditos();
  if(tela==4)
    vitoria()
  
  if(tela==5)
    Perdeu()

}  

function menu() {
   rect(x,y,170,45)
  
  textSize(40)
  text('JOGO P5', 120, 50);
  textSize(32);
  text('Jogar', 90, 130);
  text('Instruções', 90, 230);
  text('Créditos', 90, 330)
}

   function Jogo(){
  image(img3, 0,0,600,500) //menino grande em pe ( fundo da tela)
textSize(32)
  fill(0)
  ellipseMode(CENTER)
  fill(0)
   //ellipse(xE,yE,50,50) //elipse que se movimenta com o menino pequeno
  image(img2,xE,yE,80,80)//elipse que cai com os numeors 
  ellipseMode(CENTER)
  fill(0)
   //ellipse(XELI,YELI,20,20)//elipse que cai com o número 
  text(recebealeatorio,90,90)
  
  text(numero,XELI,YELI) // numero que cai com a elipse
  YELI=YELI + 2 //modifica y,para movimentar a elipse do número que desce pela vertical
  if( YELI==500 ){ //se chega embaixo aparece novamente por cima
    YELI=0
    XELI=Math.floor(random(50,600))// gera x aleatorio para aparecer 
    numero=parseInt(random(1,9)) //gera número aleatório entre 1 e 9 (tabuada)
  }
  if(dist(xE,yE,XELI,YELI)<raio1+raio2){ //se colisão com menino
    contador++
    array.push(numero) //coloca número em vetor para console
    console.log(array) //mostra vetor 
    xE=0 //atualiza x e y de menino
    yE=300
  }
  
  if(contador==2){
    global=array[0]*array[1]
  if(global==recebealeatorio){
    console.log("VITORIA")
    vitoria()
    
    
  }}
  if(contador==2){
    global=array[0]*array[1]
  if(global!=recebealeatorio){
    console.log("PERDEU")
    Perdeu()}}
  
  
  
  
  
  
  
  
   if(keyIsDown(RIGHT_ARROW) || keyIsDown(58)){
     
     if(xE<=550){
       xE=xE+speed
     }}
  
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    if(xE>=45){
      xE=xE-speed
    }}
  if(keyIsDown(UP_ARROW) || keyIsDown(87)){
    if(yE>=305){
      yE=yE-speed
    }}
  
   if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
     if(yE<=375){
       yE=yE+speed
     }}
  
  cont=cont+1
  textSize(30)
  fill(0)
  contS=parseInt(cont/60)
text("tempo:"+contS,50,50)

} 
 function Instruções() {
 textSize(20)
   let s = 'Instruções'
   text(s,250,10,550,250);
   s='Jogo desenvolvido para todo o Fundamental 1 e até níveis introdutórios do colegial como Nível IV e V com o objetivo de estimular o conhecimento da tabuada nos alunos de forma mais dinâmica e divertida.O jogo consiste em basicamente , pegar os números certos que irão cair do céu, com o objetivo de chegar o resultado aleatório que lhe for proposto na tela. para se obter a vitória ,basta pegar dois numeros certos, caso contrário,irá perder.';
   text(s,20,40,550,250)
}

 function Créditos() {
  textSize(32);
  text('Créditos:', 50, 130);
  textSize(20)
  text("Programador:Caio Isaias da Silva ",50,180)
  text("Turma:3a",50,195)
  text("Orientadora:Prof:Sayonara Santana",50,210)
  textSize(25)
 }
 function vitoria(){
  if(global==recebealeatorio)
    tela=4
  fill(150)
  rect(x,y,200,300)
  image(img3,0,0,600,500)
  text("Parabéns, acertou em cheio",90,90)
  text("Você mereceu", 90,150)
} 

function Perdeu(){
  if(global==recebealeatorio)
    tela=5
  image(img4,0,0,600,500)
  fill(0)
  textSize(32)
  text("Você foi um grande aventureiro",90,90)
  text("Porém dessa vez não foi seu dia",90,120)
  text("quem sabe na proxima",90,180)
  text("Aperte Esc para voltar ao menu",90,300)
  text("e tente novamente",90,330)
}




function keyPressed() {
  if(key=="ArrowUp" && y>130) {
   y=y-100
  opcao=opcao-1;
    console.log(opcao)
}
  if(key=="ArrowDown" && y<300) {
   y=y+100 
    opcao=opcao+1;
    console.log(opcao)
 }
  if(key=="Enter") {
   tela=opcao
  }
  if(key=="Escape") {
    tela=0
  }
    
} 




