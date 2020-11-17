var database,form,user,playercount

function setup()
{
  createCanvas(1000,1100)
  database=firebase.database();
  form=new Form();


}

function draw()
{
 background("lightGreen")
 form.display();
  drawSprites();
}


