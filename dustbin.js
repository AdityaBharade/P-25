class Dustbin{
    constructor(x, y) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.2 ,
            'isStatic': true
        }
        this.x=x;
        this.y=y;
        this.width = 200;
        this.thickness = 20;
        this.height = 180;
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options)
        World.add(world, this.bottomBody);
        this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options)
        World.add(world, this.leftBody);
        this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options)
        World.add(world, this.rightBody);
        this.Body = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options)
        World.add(world, this.Body);
        this.image=loadImage("dustbingreen.png")
      }
      display(){
        push();
        translate(this.bottomBody.position.x, this.bottomBody.position.y);
        fill("red") 
       rectMode(CENTER);
        rect( 0, 0, this.width, this.thickness);
       // imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);
        pop();

        push();
        translate(this.leftBody.position.x, this.leftBody.position.y);
        fill("red") 
        rectMode(CENTER);
        rect( 0, 0, this.thickness, this.height);
       
        pop();

        push();
        translate(this.rightBody.position.x, this.rightBody.position.y);
        fill("red") 
        rectMode(CENTER);
        rect( 0, 0, this.thickness, this.height);
        pop();
      }

      display(){
        push();
        translate(this.bottomBody.position.x, this.bottomBody.position.y); 
        imageMode(CENTER);
        image(this.image, 0,- 80, this.width, this.height);
        pop();
}
}