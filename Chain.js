class Chain{

    constructor(object, pointA, pointB){
        var options = {

            bodyA: object.body,
            pointB: {x: pointA, y: pointB},
            stiffness: 1,
            length: 100

        }
        this.chain = Matter.Constraint.create(options)
        World.add(world, this.chain);
    }

    display(){

        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);

    }
}