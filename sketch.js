const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, box2, box3, box4, box5;

var log1, log2, log3, log4;

var ground;

var pig1, pig2;

var bird;

var birds;

var sling;

var backgroundImage;

var backColor;

var birdFlyingSound, birdSelectSound;

var pigSnortSound;

var gameState = "Launch";

var score = 0;

function preload() {
    backgroundImage = loadImage("sprites/bg.png");

    birdFlyingSound = loadSound("sounds/bird_flying.mp3");

    //getTime();
}


function setup() {

    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    angryWorld = engine.world;

    box1 = new Box(1080, 850, 100, 100);

    box2 = new Box(1320, 850, 100, 100);

    box3 = new Box(1080, 750, 100, 100);

    box4 = new Box(1320, 750, 100, 100);

    box5 = new Box((1320 + 1080) / 2, 650, 100, 100);

    log1 = new Log((1320 + 1080) / 2, 800, (1320 - 1080) + 100, PI);

    log2 = new Log((1320 + 1080) / 2, 700, (1320 - 1080) + 100, PI);

    log3 = new Log(1080 + 50, 680, 150, -(PI / 4));

    log4 = new Log(1320 - 50, 680, 180, PI / 4);

    pig1 = new Pig((1320 + 1080) / 2, 850);

    pig2 = new Pig((1320 + 1080) / 2, 750);

    ground = new Ground(width / 2, height - 10, width, 20);

    standGround = new Ground(250, height - 20, 500, 500);

    birdl = new Bird(200, 269);
    birdCenter = new Bird(300, 650);
    birdr = new Bird(400, 650);

    birds = [];

    birds.push(birdr);
    birds.push(birdCenter);
    birds.push(birdl);

    
    sling = new Slingshot(birdl.body, {x: 200, y: 505});

}

function draw() {

    //if(backColor){

        background("yellow");
        Engine.update(engine);

        textSize(20);
        text("Score : " + score, 1600, 50);

        fill("blueviolet");

        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();

        log1.display();
        log2.display();
        log3.display();
        log4.display();

        ground.display();

        standGround.display();

        pig1.display();
        pig2.display();

        birdl.display();
        birdCenter.display();
        birdr.display();

        sling.display();

    //}
    
    /*fill("black");
    textSize(20);
    text(mouseX + " ' " + mouseY, mouseX, mouseY);*/

}

function mouseDragged(){

    if(gameState == "Launch"){

        Matter.Body.setPosition(birds[birds.length - 1].body, {x: mouseX, y: mouseY});

    }

}

function mouseReleased(){

    sling.launch();

    gameState = "Play";
    
    if(birds[birds.length - 1].body.position.x < 300 && birds[birds.length - 1].body.position.y < windowHeight / 2 + 200){

        birdFlyingSound.play();

    }

    
    birds.pop();

}

function keyPressed(){
    if(keyCode == "32" && gameState == "Play"){

        Matter.Body.setPosition(birds[birds.length - 1].body, {x: 200, y: 269});

        sling.attach(birds[birds.length - 1].body);

        gameState = "Launch";

        birds[birds.length - 1].body.trajectory = [];

    }
}

/*async function getTime() {

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJson = await response.json();

    var time = responseJson.datetime.slice(11, 13);

    if(time > 05 && time <= 19){
        backColor = "yellow";
    }else{
        backColor = "black";
    }

    console.log(time);
}*/
