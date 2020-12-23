class Box extends ParentClass {
    constructor(x, y, width, height) {
        super(x, y, width, height);

        this.friction = 1.5;

        this.image = loadImage("sprites/wood1.png");
    }
}