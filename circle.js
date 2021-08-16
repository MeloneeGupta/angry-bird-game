class Circle
{
constructor(x,y,r)
{
    var options={
density:1,
isStatic:false,
friction:0.05
    }
this.body=Bodies.rectangle(x,y,r,options)
this.r=r
World.add(world,this.body);
    }

display()
{
push()
translate (this.body.position.r);
ellipse(0,0,this.r);
pop ()
}
}
