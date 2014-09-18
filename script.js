var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var bg;
var cows;
var cow2;
var streetlamp;
var windmill;

function preload(){
	game.load.spritesheet('cow', 'assets/cow.png', 100, 50);
	game.load.spritesheet('cow2', 'assets/cow2.png', 84, 45);
	game.load.spritesheet('streetlamp', 'assets/streetlamp.png', 39, 204);
	game.load.spritesheet('windmill', 'assets/windmill.png', 176, 201);

	game.load.image('bg', 'assets/bg.jpg');
}

function create(){
	bg= game.add.sprite(0,0, 'bg');

	cows[0] = game.add.sprite(100,100, 'cow');
	cows[0].animations.add('walk');
	cows[0].inputEnabled = true;
	cows[0].events.onInputDown.add(cowClick, this);

	cows[1] = game.add.sprite(100,200, 'cow');
	cows[1].animations.add('walk');
	cows[1].inputEnabled = true;
	cows[1].events.onInputDown.add(cowClick, this);

	cows[2] = game.add.sprite(100,300, 'cow');
	cows[2].animations.add('walk');
	cows[2].inputEnabled = true;
	cows[2].events.onInputDown.add(cowClick, this);



	cow2 = game.add.sprite(200,100, 'cow2');

	streetlamp = game.add.sprite(300,100, 'streetlamp');
	streetlamp.animations.add('lamp');
	streetlamp.animations.play('lamp', 5, true);

	windmill = game.add.sprite(400,100, 'windmill');
	windmill.animations.add('spin');
	windmill.animations.play('spin', 10, true);

	//cow.animations.play('walk', 10, true); //3프레임까지는 움직이고 클릭했을때 4프레임부터 움직이게 
}

function cowClick() {
  	cows[0].animations.play('walk', 10, false);
  	cows[1].animations.play('walk', 20, false);
  	cows[2].animations.play('walk', 30, false);

  	cow2.animations.play('walk', 10, false);
}
