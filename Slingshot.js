class Slingshot{
    constructor(body1, pointB){
        var properties = {
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.08,
            length: 68
        }

        this.slingshot = Constraint.create(properties); 

        this.bodyA = body1;
        this.pointB = pointB;

        World.add(angryWorld, this.slingshot);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }
     
    launch(){

        this.slingshot.bodyA = null;

    }

    attach(bodyA){
        this.slingshot.bodyA = bodyA;
    }

    display(){

        if(this.slingshot.bodyA){   

            if(this.bodyA.position.x <220) {
                
                strokeWeight(15);
                
                line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x - 10, this.pointB.y + 10);
                line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x + 20, this.pointB.y + 20);

                image(this.sling3, this.bodyA.position.x - 30, this.bodyA.position.y - 30, 15, 30);
                            
            }else if(this.bodyA.position.x > 220){
                
                strokeWeight(13)

                line(this.bodyA.position.x + 20, this.bodyA.position.y + 10, this.pointB.x + 10, this.pointB.y + 10);
                line(this.bodyA.position.x + 20, this.bodyA.position.y + 10, this.pointB.x - 20, this.pointB.y + 20);

                image(this.sling3, this.bodyA.position.x + 30, this.bodyA.position.y - 30, 15, 30);

            }

        }

        image(this.sling1, 200, 500);
        image(this.sling2, 170, 500);

    }
}