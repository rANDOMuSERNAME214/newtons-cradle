class ball{

consructor(x,y,radius){
  var  options1={
   density=0.2,
   restitution=0.9,
  }  
  this.body=Bodies.circle(x,y,radius,options1);
  this.radius=radius
  World.add(world,this.body)
 }
 display(){
 ellipse(this.position.x,this.position.y,this.radius)
 }
}