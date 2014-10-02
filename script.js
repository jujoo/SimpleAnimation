var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '', {preload: preload, create: create});
var bg;
var cow ;
var cow2;
var streetlamp = [];
var windmill;
var cowEmitter;

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

	//드래그 이벤트
	cow = game.add.sprite(1948,640, 'cow');
	cow.anchor.x = 0.5;
	cow.anchor.y = 0.5;
	cow.animations.add('eat', [0,1,2,3,4,5]);
	cow.animations.add('walk', [6,7,8,9] );

	var cowDown = function() {
		cow.scale.x = 4;
		cow.scale.y = 4;
		cow.animations.play('walk', 9, true);
	}

	var cowUp = function() {
		cow.scale.x = 1;
		cow.scale.y = 1;
		cow.animations.play('eat', 9, true);
	}


	cow.inputEnabled = true;
	cow.input.enableDrag(true);
	cow.events.onInputDown.add(cowDown, this);
	cow.events.onInputUp.add(cowUp, this);
	cow.animations.play('eat', 9, true);

	// cow.animations.add('eat', [0,1,2,3,4,5], 9, true, true );
	// cow.inputEnabled = true;
	// cow.input.enableDrag(true);
	// cow.walkAnim = cow.animations.add('walk',[6,7,8,9],9,true,true);
	// var walkCompleted = function(){
	// 	cow.animations.play('eat');
	// }
	// cow.walkAnim.onComplete.add(walkCompleted, this);

	// cow.inputEnabled = true;
	//cow.events.onInputDown.add(cowClick0, this);
	// cow.animations.play('eat');

	cow2 = game.add.sprite(1960,708, 'cow2');

	streetlamp[0] = game.add.sprite(2908,746, 'streetlamp');
	streetlamp[0].animations.add('lamp');
	streetlamp[0].animations.play('lamp', 5, true);

	windmill = game.add.sprite(2036,400, 'windmill');
	windmill.animations.add('spin');
	windmill.animations.play('spin', 5, true);

	/*추가 이미지*/
	circle = game.add.sprite(3242,584, 'circle');
	seesaw = game.add.sprite(3730,620, 'seesaw');
	trapeze = game.add.sprite(3400,574, 'trapeze');
	clock_tower = game.add.sprite(3210,1096, 'clock_tower');
	airballoon = game.add.sprite(3342,620, 'airballoon');
	truck = game.add.sprite(1544,1324, 'truck');


	/*파티클*/
	cowEmitter = game.add.emitter(100, 100); // x, y 좌표
	cowEmitter.makeParticles('cow');
	//cowEmitter.start(true, 2000, null, 10); // 폭발(t/f), 수명(ms), 주기(ms), 갯수  - true 한버네 다나옴/false- 주기를 설정하고 순차적으로나옴
	cowEmitter.gravity = 1000; //중력 - 숫자가 커질수록 빠르다(밑으로 떨어짐)
	game.input.onDown.add(cowBurst, this);

}
// var cowClick = function() {
// 	var clickComplete = function() {
// 		cow.animations.play('growl', 5, true);
// 	}
// 	cow.animations.play('walk', 5, false).complete = clickComplete;
// }

//function cowClick() {
// 	cows[0].animations.play('walk', 10, false);
// 	cows[1].animations.play('walk', 20, false);
// 	cows[2].animations.play('walk', 30, false);

// 	cow2.animations.play('walk', 10, false);
//}
// function cowClick0() {
// 	cow.animations.play('walk',6,false);
// }


function cowBurst(mouse) {
	// cowEmitter.start(true, 2000, null, 10);

	// cowEmitter.x = mouse.x;
	// cowEmitter.y = mouse.y;

	// console.log("x: " + mouse.x + "y:" + mouse.y);
}
