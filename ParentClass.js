class ParentClass {
    constructor(x, y, width, height, angle) {

        this.friction = 0.8;
        this.density = 0.8;
        this.restitution = 0.5;
        this.isStatic = false;

        var properties = {
            restitution: this.restitution,
            friction: this.friction,
            density: this.density,
            isStatic: this.isStatic
        }

        this.body = Bodies.rectangle(x, y, width, height, properties);
        this.image = loadImage("sprites/base.png");

        this.width = width;
        this.height = height;

        World.add(angryWorld, this.body);
    }

    display() {
        var pos = this.body.position;

        var ang = this.body.angle;

        push();

        translate(pos.x, pos.y);

        rotate(ang);

        imageMode(CENTER);

        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}