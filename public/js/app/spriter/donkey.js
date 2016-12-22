/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function Donkey() {
		this.Container_constructor();

		this.x = 0;

		this.y = 0;

		// front || left || right
		this.direction = 'front'

		//speed x
		this.speedX = 1;

		// speed y
		this.speedY = .5;

		// 为－1表示 z轴翻转
		this.scaleX = 1;


		//width 
		this.width = 0;

		//height

		this.height = 0;

		//alpha

		this.alpha = 1;

		//rotation 

		this.rotation = 0;

		// supernam
        this._superJumpHeight = 0;

       	//mj
        this._MJHeight = 0;

        //gliding
        this._glidingHeight = 0;

      	//ufo
        this._UFOHeight = 0;

        //balloon
        this._balloonHeight = 0;
		// deadheight

		this.deadheight = 1000;

		// inertia

		this.inertia = 1;
		
		//max height arrived
		this.maxTop = 0;
		this.initSprites();
	}

	var p = createjs.extend(Donkey, createjs.Container);

	//initialize donkey 
	p.initSprites = function() {

		if(this.animation && this.animation.parent){
            this.animation.parent.removeChild(this.animation);
        }
		this.spriteSheet =  new createjs.SpriteSheet(donkeyFrames);
		this.animation = new createjs.Sprite(this.spriteSheet,'daiji');
		this.addChild(this.animation);
		var that = this;
		var start = + new Date();
		//this.transformMatrix = [1,0,0,1,0,0]
 
 
		this.addEventListener("tick",function (){
			 ( + new Date - start) <2000?console.log(that._rectangle.y):'';

			 if(dkg.KeyEvent.check('VK_LEFT') || dkg.KeyEvent.check('A')) {
                // donkeyJump.keyDownLeft = true;
                that.x -= 4
            } else {
                // donkeyJump.keyDownLeft = false;
                

            }

            if(dkg.KeyEvent.check('VK_RIGHT') || dkg.KeyEvent.check('D')) {
                // donkeyJump.keyDownRight = true;
                that.x += 4
            } else {
                // donkeyJump.keyDownRight = false;
            }

             if(dkg.KeyEvent.check('VK_UP') || dkg.KeyEvent.check('A')) {
                // donkeyJump.keyDownLeft = true;
                that.y -= 5
            } else {
                // donkeyJump.keyDownLeft = false;
                

            }

            if(dkg.KeyEvent.check('VK_DOWN') || dkg.KeyEvent.check('D')) {
                // donkeyJump.keyDownRight = true;
                that.y += 5
            } else {
                // donkeyJump.keyDownRight = false;
            }
		})
	}


	//左右的边界检查

	p.checkBoder = function() {
		if (this.direction == 'left' && this.x < -64) {
		
		}
	}

	// startShow

	p.startRun = function() {
		
	}


	dkg.Donkey = createjs.promote(Donkey, "Container");;
})(window.dkg || (window.dkg ={}));

dkg.KeyEvent.addListener();





























