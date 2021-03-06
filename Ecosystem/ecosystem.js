var canvas;
var ctx;
function Ecosystem(){
  this.numvehicles = 50;
  this.vehicles = [];
  this.numsnakes = 5;
  this.snakes = [];
  this.numBalls = 50;
  this.balls = [];
  this.numOrbiters = 3;
  this.orbiters = [];
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  //get the context
  ctx = canvas.getContext('2d'); // This is the context
  for(var i = 0;i<this.numvehicles;i++){
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    var loc = new JSVector(x, y);
    var dx = Math.random()*2-1;
    var dy = Math.random()*2-1;
    var vel = new JSVector(dx, dy);
    var ax = 0;
    var ay = 0;
    var base = 12;
    var height = 20;
    var acc = new JSVector(ax, ay);
    this.vehicles.push(new Vehicle(loc, vel, acc, base, height));
  }
  for(var i=0;i<this.numsnakes;i++){
    var snake = new Snake(10);
    this.snakes.push(snake);
  }
  for(var i=0;i<this.numBalls;i++){
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    var loc = new JSVector(x, y);
    var dx = Math.random()*2-1;
    var dy = Math.random()*2-1;
    var vel = new JSVector(dx, dy);
    var ax = 0;
    var ay = 0;
    var acc = new JSVector(ax, ay);
    var r = Math.random()*5 + 10;
    this.balls.push(new Ball(loc, vel, r, acc))
  }
  for(var i=0;i<this.numOrbiters;i++){
    var orbboid = new Boid();
    var orbiter = new Orbiter(orbboid);
    this.orbiters.push(orbboid);
  }

}

Ecosystem.prototype.run = function(){
  this.snakesrun();
  this.ballsrun();
  this.orbitersrun();
  this.vehiclesrun();
}

Ecosystem.prototype.snakesrun = function(){
  for(var i=0;i<this.snakes.length;i++){
    this.snakes[i].run();
  }
}

Ecosystem.prototype.ballsrun = function(){
  for(let i=0;i<this.balls.length;i++){
    this.balls[i].run();
  }
}

Ecosystem.prototype.orbitersrun = function(){
  for(var i=0;i<this.orbiters.length;i++){
    this.orbiters[i].run();
  }
}

Ecosystem.prototype.vehiclesrun = function(){
  for(var i=0;i<this.vehicles.length;i++){
    this.vehicles[i].run();
  }
}
