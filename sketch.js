var wall , thickness ;
var bullet ,speed , weight ; 
var bulletRightEdge , wallLeftEdge ; 



function setup() {
  createCanvas(1600,400);
   speed = random(223,321)
   weight = random(30 ,52)
   thickness = random(22,83)
bullet = createSprite (50 , 200 , 20, 50)
bullet.shapeColor = "blue"
bullet.velocityX = speed ; 
wall = createSprite (1200 , 200 , thickness , height/2)
wall.shapeColor = color(80 , 80 , 80)


}

function draw() {
  background(255,255,255);
  if(hascollided(bullet , wall))
 {
bullet.velocityX = 0
var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness)
 
 if(damage>10)
 {
   wall.shapeColor = "green"
 }
 if(damage<10)
 {
   wall.shapeColor = "red"
 } 
} 
  drawSprites();
}



function hascollided(lbullet , lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width ;
  wallLeftEdge = lwall.x
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
 return false
}
 
