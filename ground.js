class Ground{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        var options={isStatic:true}
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display(){
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}