class Bird extends ParentClass {
    constructor(x, y) {
        super(x, y, 70, 70);

        this.friction = 1;
        this.density = 20;
        this.restitution = 0.5;

        this.image = loadImage("sprites/bird.png");

        this.smokeImage = loadImage("sprites/smoke.png");

        this.trajectory = [];
        
    }

    display() {
        super.display();

        //Store the value of the indexes as they increase, each index = i since it is looping through the indexes

        //This is what the index looks like for storing the x and y of the bird, the main index[add the second index[x, y]]

        //As the birds position increases the array keeps adding new indexes inside of it as the new position.

        if(this.body.velocity.x > 3 && this.body.position.x > 200 && this.body.position.y < height - 20 && gameState == "Play"){

            var position = [this.body.position.x, this.body.position.y];

            this.trajectory.push(position);

        }

        for(var i = 0; i < this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }

    //[[x, y], [x, y], [x, y]]
}