class Log extends ParentClass {
    constructor(x, y, width, ang) {
        super(x, y, width, 20, ang)

        this.friction = 2;

        this.density = 1;


        Matter.Body.setAngle(this.body, ang);

        this.image = loadImage("sprites/wood2.png");
    }
}