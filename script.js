var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var cow;
var bg;

function preload(){
	game.load.spritesheet('cow', 'assets/cow.png', 100, 50);
	game.load.image('bg', 'assets/bg.jpg');
}

function create(){
	bg= game.add.sprite(0,0, 'bg');

	cow = game.add.sprite(100,100, 'cow');
	cow.animations.add('walk');
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);

	//cow.animations.play('walk', 10, true); //3프레임까지는 움직이고 클릭했을때 4프레임부터 움직이게 
}

function cowClick() {
  	cow.animations.play('walk', 10, false);
}
