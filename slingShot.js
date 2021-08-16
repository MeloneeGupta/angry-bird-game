class SlingShot
{
constructor(bodyA,pointB)
{
    var options={
bodyA:bodyA,
pointB:pointB,
length:15
    }

this.pointB=pointB
this.sling=constraint.create(options);
world .add(world.this.sling);
}

attach(body) {
  this.rope.bodyA = body}

  fly() {
    this.rope.bodyA = null;
  }

  display()
  {
    if(this.rope.bodyA.sling)
var pointA=this.sling.bodyA.position
var pointB=this.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y)


  }
}