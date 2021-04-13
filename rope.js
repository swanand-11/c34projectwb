class rope  {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:600,
            stiffness: 0.04,
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           line(pointB.x, pointB.y, pointA.x, pointA.y)
            pop();
        }
    }
    
}
    
