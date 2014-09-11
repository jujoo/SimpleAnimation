var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var cow;

function preload(){
	game.load.spritesheet('cow', 'assets/cow.png', 100, 50);
}

function create(){
	game.add.sprite(100,100, 'cow');
	cow.animation.add('walk');
	cow.animations.play('walk', 10, true);
}