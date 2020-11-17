class Form
{

constructor()
{
  this.greeting=createElement('h2')
  this.input=createInput("")
  this.email=createInput("")
  this.button=createButton('submit')
  this.title=createElement('h2')
  this.name=createElement('h3')
  this.reset=createButton('reset')

  this.input.style('width','160px')
  this.email.style('width','160px')
  this.button.style('width','100px')
  this.button.style('height','40px')
  this.button.style('background','green')
  this.reset.style('width','100px')
  this.reset.style('height','40px')
  this.reset.style('background','green')

  // question 1:
  this.question1=createElement('h4',"Q1. Is education good in India compared to other countries ?")
  this.radio1=createRadio('h5');
  this.radio1.option('YES')
  this.radio1.option('NO')
  this.radio1.style('width','1500px')

  // question 2:
  this.question2=createElement('h4',"Q2. Is cocurricular activities necessary ?")
  this.radio2=createRadio('h5');
  this.radio2.option('YES')
  this.radio2.option('NO')
  this.radio2.style('width','1500px')

// question 3:
this.question3=createElement('h4',"Q3. Should we change the learning style of education in India ?")
this.radio3=createRadio('h5');
this.radio3.option('YES')
this.radio3.option('NO')
this.radio3.style('width','1500px')



// question 4:
this.question4=createElement('h4',"Q4. Is to many exams needed to access the children?")
this.radio4=createRadio('h5');
this.radio4.option('YES')
this.radio4.option('NO')
this.radio4.style('width','1500px')

// question 5:
this.question5=createElement('h4',"Q5. Give your feedback based on India's educt ")
this.description=createInput("mention your feedback here")
this.description.style('width','420px')
this.description.style('width','1500px')

}

display()
{
  this.title.html("STUDENT SURVEY ON EDUCATION SYSTEM");
  this.title.position(500,20)

  this.name.html("Your name");
  this.name.position(650,100)
 this.input.positon(10,10)

  this.email.html("Your Email");
  this.email.position(displayWidth/2+50,200)
  this.email.position(displayWidth/2+300,225)
  this.button.position(displayWidth/2+100,displayHeight-140)
  this.reset.position(displayWidth/2+300,displayHeight-140)

  this.question1.position(displayWidth/2-100,300)
  this.radio1.position(displayWidth/2+150,360)

  this.question2.position(displayWidth/2-100,400)
  this.radio2.position(displayWidth/2+150,460)

  this.question3.position(displayWidth/2-100,500)
  this.radio3.position(displayWidth/2+150,560)

  this.question4.position(displayWidth/2-100,600)
  this.radio4.position(displayWidth/2+150,660)

  this.question5.position(displayWidth/2-100,700)
  this.description.position(displayWidth/2+150,760)
  this.description.style('color','lightpink')
  this.description.style('font-size','20px')

}








}