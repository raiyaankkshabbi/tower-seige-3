class Pentagon {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("pentagon.png")
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("purple");
    imageMode(RADIUS);
    image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}