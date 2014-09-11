var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});

function preload(){
	game.load.image('cow', 'assets/cow.png');
}
function create(){
	game.add.sprite(100,100, 'cow');
}