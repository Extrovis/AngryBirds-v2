class Pig extends ParentClass {
    constructor(x, y) {

        super(x, y, 80, 80);

        this.image = loadImage("sprites/enemy.png");

        this.visiblity = 255;

    }

    display(){
        if(this.body.speed < 4){
            super.display();
        }else {
            World.remove(angryWorld, this.body);

            if(frameCount % 2 == 0){
                this.visiblity -= 5;
            }

            push();
            tint(255, this.visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 80, 80);
            pop();
        }

        if(this.visiblity < 255 && this.visiblity > -10){
            score++;
        }
    }

}