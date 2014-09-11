var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var cow;

function preload(){
	game.load.spritesheet('cow', 'assets/cow.png', 100, 50);
}

function create(){
	cow = game.add.sprite(100,100, 'cow');
	cow.animations.add('walk');
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);

	cow.animations.play('walk', 10, true); //3프레임까지는 움직이고 클릭했을때 움직이게 
}

function cowClick() {
  	cow.animations.play('walk', 10, false);
}