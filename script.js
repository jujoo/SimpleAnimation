var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '', {preload: preload, create: create});
var bg;
var cow ;
var cow2;
var streetlamp = [];
var windmill;

function preload(){
	game.load.spritesheet('cow', 'assets/cow.png', 100, 50);
	game.load.spritesheet('cow2', 'assets/cow2.png', 84, 45);
	game.load.spritesheet('streetlamp', 'assets/streetlamp.png', 39, 204);
	game.load.spritesheet('windmill', 'assets/windmill.png', 176, 201);

	/*추가 이미지*/
	game.load.spritesheet('circle', 'assets/circle.png', 106, 126);
	game.load.spritesheet('seesaw', 'assets/seesaw.png', 77, 103);
	game.load.spritesheet('trapeze', 'assets/trapeze.png', 321, 112);
	game.load.spritesheet('clock_tower', 'assets/clock_tower.png', 66, 215);
	game.load.spritesheet('airballoon', 'assets/airballoon.png', 310, 540);
	game.load.spritesheet('truck', 'assets/truck.png', 120, 65);

	game.load.image('bg', 'assets/bg.jpg');
}

function create(){
	bg= game.add.sprite(0,0, 'bg');

	cow = game.add.sprite(974,320, 'cow');
	cow.animations.add('eat', [0,1,2,3,4,5], 9, true, true );
	cow.walkAnim = cow.animations.add('walk',[6,7,8,9],9,true,true);
	var walkCompleted = function(){
		cow.animations.play('eat');
	}
	cow.walkAnim.onComplete.add(walkCompleted, this);

	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick0, this);
	cow.animations.play('eat');


	/*cows[1] = game.add.sprite(100,200, 'cow');
	cows[1].animations.add('walk');
	cows[1].inputEnabled = true;
	cows[1].events.onInputDown.add(cowClick, this);

	cows[2] = game.add.sprite(100,300, 'cow');
	cows[2].animations.add('walk');
	cows[2].inputEnabled = true;
	cows[2].events.onInputDown.add(cowClick, this);
	*/

	cow2 = game.add.sprite(980,354, 'cow2');

	streetlamp[0] = game.add.sprite(1454,373, 'streetlamp');
	streetlamp[0].animations.add('lamp');
	streetlamp[0].animations.play('lamp', 5, true);

	windmill = game.add.sprite(1018,200, 'windmill');
	windmill.animations.add('spin');
	windmill.animations.play('spin', 5, true);

	/*추가 이미지*/
	circle = game.add.sprite(1621,292, 'circle');
	seesaw = game.add.sprite(1865,310, 'seesaw');
	trapeze = game.add.sprite(1700,287, 'trapeze');
	clock_tower = game.add.sprite(1605,548, 'clock_tower');
	airballoon = game.add.sprite(1671,310, 'airballoon');
	truck = game.add.sprite(772,662, 'truck');



	//cow.animations.play('walk', 10, true); //3프레임까지는 움직이고 클릭했을때 4프레임부터 움직이게 
}

function cowClick() {
// 	cows[0].animations.play('walk', 10, false);
// 	cows[1].animations.play('walk', 20, false);
// 	cows[2].animations.play('walk', 30, false);

// 	cow2.animations.play('walk', 10, false);
}
function cowClick0() {
	cow.animations.play('walk',6,false);
}
