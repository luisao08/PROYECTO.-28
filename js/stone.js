class stone
{
	constructor(x,y)
	{
		var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
		this.x=x;
		this.y=y;
		
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
		var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}