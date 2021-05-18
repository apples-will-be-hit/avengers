class Rubber{
	constructor(x,y,r)
	{
	var options = {
		restitution:0.3,
		friction:5,
		density:1
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		this.image = loadImage("RUBBER.png");
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

			pop()
	}

}