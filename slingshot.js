class  slingshot {
    constructor(ba,bb){
        var options ={
            bodyA:ba,
           pointB:bb,
            length:10,
            stiffness:0.04
        }
        this.chain=constraint.create(options);
        World.add(world,this.chain);
    }
    fly(){
       this.chain.bodyA=null;

    }
    display(){
        if(this.chain.bodyA){
             var pointa=this.chain.bodyA.position;
        var pointb=this.chain.pointB;
        line(pointa.x,pointa.y,pointb.x,pointb.y);
    }
        }
       
}  