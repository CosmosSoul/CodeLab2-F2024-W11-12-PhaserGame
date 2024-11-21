class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    
    create(){
        this.background = this.add.image(200, 100, "background");
        this.background.setOrigin(0, 0);
        
        this.ship1 = this.add.image(this.width/2 - 50, this.height/2, "ship");
        
        this.add.text(20, 20, "Playing game...", {font: "25px Arial", fill: "purple"});
    }
}