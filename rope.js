class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2,
			stiffness:0.1,
			length:200,
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		push();
		strokeWeight(3);
		stroke("white");
		fill("green");
		line(this.rope.bodyA.x,this.rope.bodyA.y,this.rope.bodyB.x,this.rope.bodyB.y);
		pop();
		
	}

}