var bg,cat,mouse,cat2,mouse2,bg2,cats,mouses,cata;
function preload() {
    bg=loadImage("images/garden.png");
    cat=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
    mouse=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
    cats=loadImage("images/cat1.png")
    mouses=loadImage("images/mouse1.png")
    cata=loadImage("images/cat2.png")
}

function setup(){
    createCanvas(1000,800);
    bg2=createSprite(500,400)
    bg2.addImage(bg);
    cat2=createSprite(900,680);
    cat2.addImage(cats);
    cat2.scale=0.15;
    mouse2=createSprite(300,650);
    mouse2.addImage(mouses);
    mouse2.scale=0.15;
    mouse2.velocityX=5
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(mouse2.x-cat2.x<=200+mouse2.width/2-cat2.width/2&&
        cat2.x-mouse2.x<=200+mouse2.width/2-cat2.width/2){
            mouse2.velocityX=-5  
            cat2.velocityX=-5
            cat2.addImage(cata);
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
