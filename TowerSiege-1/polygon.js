class Polygon {
    constructor(x,y, angle) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(500, 200, 20);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
    
      var pos =this.body.position;
     
      imageMode(CENTER)
      
      this.image = loadImage("polygon.png");
    }
  };
