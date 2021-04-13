class ball extends BaseClass {
    constructor(x,y,width, height,angle){
        super(x,y, width, height,angle)

        var options = {
            density:2.0,
            frictionAir:0.0005
        }
    }

    
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            ellipseMode(CENTER);
            ellipse( 0, 0, this.width, this.height);
            pop();
        
    }
        }
        
