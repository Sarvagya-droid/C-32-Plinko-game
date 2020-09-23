class particle{
    constructor(x, y,r){
        var options ={
            restitution:0.6
        }

    this.r = r;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    }

    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        var angle = this.body.angle;

        push();
        translate(posX, posY);
        rotate(angle);
        
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r*2, this.r*2);
        pop();

    }
}