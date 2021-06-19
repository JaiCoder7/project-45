class Form {

    constructor() {
      this.input = createInput("name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');

      this.input1 = createInput("answer");
      this.button1 = createButton('Play');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.input1.hide();
      this.button1.hide();
    }
  
    display(){
      fill("white");
      if(gameState === "start")
      {
        this.title.html("The Key Runner");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
      }
      else if(gameState === "answer")
      {
this.input1.position(displayWidth/2 + 1000, displayHeight/2-100);
this.button1.position(displayWidth/2 + 1000,500);
      }

  /*    if(this.input1 === "coin"){

gameState = "correct"
this.input1.hide();
this.button1.hide();
      }
      else if (this.input1 !== "coin"){
        gameState ="incorrect";
        this.input1.hide();
        this.button1.hide();
      }
      */
 
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var player = this.input;
        this.greeting.html("Hello " + player)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }
  