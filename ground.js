class Ground{

    constructor(x,y,w,h){

        let options={
            isStatic:true
        }
     this.body=bodies.rectangle(x,y,w,h,options)
     this.w=w;
     this.h=h;
     World.add(world, this.body)

    }

   display(){
    groundObj.display();
    
    groundObj=new ground(width/2,670,width,20);
    leftSide=new ground(1100,600,20,120)
    rightSide=new ground(900,600,20,120)
   }

















}
