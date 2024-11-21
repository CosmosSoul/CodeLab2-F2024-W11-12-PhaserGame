window.onload = function(){
    //var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var config = {
        width: 800,
        height: 600,
        backgroundColor: 0x000000,
        scene: [Scene1, Scene2],
    }
    
    var game = new Phaser.Game(config);
}
