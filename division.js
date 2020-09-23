class Division{
    constructor(x, y){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y,10, 150, options);
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x, this.body.position.y,10, 150);
    }
}