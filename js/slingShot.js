class SlingShot{
    //to create the slingshot
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        //to attach the bird to the slingshot
        this.sling.bodyA = body;
    }
    
    fly(){
        //to release the bird from the slingshot
        this.sling.bodyA = null;
    }

    display(){
        //to display the properties
        if(this.sling.bodyA){
          strokeWeight(2);
          line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
    
}