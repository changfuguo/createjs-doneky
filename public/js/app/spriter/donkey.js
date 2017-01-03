/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function Donkey() {
		this.Container_constructor();
		//以下属性是从 container集成过来的

		this.x = 0;
		this.y = 0;
		this.alpha = 1;
		this.regX = 0;
		this.regY = 0;
		this.rotation = 0;
		this.scaleX = 1;
		this.scaleY = 1;
		this.skewX = null;
		this.skewY = null;
		// front || left || right
		this.direction = 'front'
		//speed x
		this.speedX = 0;
		// speed y
		this.speedY = 0;
		//
		this.lastSpeedX = 0;
		this.lastSpeedY = 0;

		this.acceX = 0;
		this.acceY = 0;

		this.lastX = this.x;
		this.lastY = this.y;
		//width 
		this.width = 0;
		//height
		this.height = 0;
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
    var i = 0;
	p.update = function(deltaTime){
        console.log(this.speedX)
		this.lastSpeedX = this.speedX;
        this.lastSpeedY = this.speedY;
        this.lastX = this.x;
        this.lastY = this.y;

        // 计算移动速度
        this.speedX = this.lastSpeedX + this.acceX * deltaTime;
        this.speedY = this.lastSpeedY + this.acceY * deltaTime;

        // 计算精灵位置
        this.x += Math.round((this.lastSpeedX + this.speedX) * deltaTime / 2);
        this.y += Math.round((this.lastSpeedY + this.speedY) * deltaTime / 2);

        this.stateUpdate && this.stateUpdate();

	};

	p.__borderCheck = function(){
		if(this.direction == 'left' && this.x < -64) {
            this.x = 416;
        } else if(this.direction == 'right' && this.x > 464) {
            this.x = -64;
        }
	};
	p.__stateReady = function(deltaTime) {
        // var game = this.game;
        // if(game.ready(deltaTime)) {
        //     this.stateUpdate = this.superJump;
        //     return false;
        // }
        if(this.controler.keyDownLeft) {
            console.log('__stateReady')
            if(this.direction != 'left') {
                this.animation.gotoAndPlay('run');
                this.scaleX = -1;
                this.speedX = -0.2;
                this.direction = 'left';
            }
            this.__borderCheck();
        } else if(this.controler.keyDownRight) {
            if(this.direction != 'right') {
                this.animation.gotoAndPlay('run');
                this.scaleX = 1;
                this.speedX = 0.2;
                this.direction = 'right';
            }
            this.__borderCheck();
        } else {
            if(this.direction != 'front') {
                this.animation.gotoAndPlay('daiji');
                this.scaleX = 1;
                this.speedX = 0;
                this.direction = 'front';
            }
        }
	};
    p.__jump = function(){
        if(this.animation.currentAnimation != 'jump') {
            this.animation.gotoAndPlay('jump');
            this.speedY = -1;
            this.acceY = 1 / 600;
            this.width = 128;
            this.height = 128;
        }
        this.__keyControl(true);
        this.viewUpdate();
    };
    p.viewUpdate = function(){
        this.controler && this.controler.viewportUpdate();
    };
    p.jump = function() {
        console.log(this.speedY)
        if(this.speedY != -1) {
            this.__jump();
        }
    };

    p.MJ = function(){
        if(this.__MJHeight > 1200) {
            this.__MJHeight = 0;
            this.stateUpdate = this.__jump;
            return false;
        } else {
            this.__MJHeight += (this.lastY - this.y);
        }

        if(this.animation.currentAnimation != 'superjump') {
            this.animation.gotoAndPlay('MJ');
            this.speedY = -0.5;
            this.acceY = 0;
            this.scaleX = 1;
        }
        this.__keyControl();
        this.viewUpdate();

    };

    p.__keyControl = function (scaleX){
        scaleX = scaleX ? -1 : 1;
        var game = this.controler;
        if(game.keyDownLeft) {
            if(this.direction != 'left') {
                this.scaleX = scaleX;
                this.direction = 'left';
            }
            this.speedX = -0.25;
            this.inertia = this.speedX;
            this.__borderCheck();
        } else if(game.keyDownRight) {
            if(this.direction != 'right') {
                this.scaleX = 1;
                this.direction = 'right';
            }
            this.speedX = 0.25;
            this.inertia = this.speedX;
            this.__borderCheck();
        } else {
            debugger
            if(this.inertia < 0) {
                this.inertia += 0.005;
            } else if(this.inertia > 0) {
                this.inertia -= 0.005;
            }
            this.speedX = this.inertia;
        }
    };
    p.superJump = function(){
        if(this.__superJumpHeight > 1200) {
            this.__superJumpHeight = 0;
            this.stateUpdate = this.__jump;
            return false;
        } else {
            this.__superJumpHeight += (this.lastY - this.y);
        }

        if(this.animation.currentAnimation != 'superjump') {
            this.animation.gotoAndPlay('superjump');
            this.speedY = -0.8;
            this.acceY = 0;
        }
        this.__keyControl(true);
        this.viewUpdate();

    };

    p.gliding = function(){
        if(this.__glidingHeight > 1200) {
            this.__glidingHeight = 0;
            this.stateUpdate = this.__jump;
            return false;
        } else {
            this.__glidingHeight += (this.lastY - this.y);
        }

        if(this.animation.currentAnimation != 'plan') {
            this.animation.gotoAndPlay('plan');
            this.speedY = -0.5;
            this.acceY = 0;
            this.scaleX = 1;
            this.width = 256;
            this.height = 256;
        }
        
        this.__keyControl();
        this.viewUpdate();

    };

    p.UFO = function(){
        if(this.__UFOHeight > 1200) {
            this.__UFOHeight = 0;
            this.stateUpdate = this.__jump;
            return false;
        } else {
            this.__UFOHeight += (this.lastY - this.y);
        }

        if(this.animation.currentAnimation != 'ufo') {
            this.animation.gotoAndPlay('ufo');
            this.speedY = -0.5;
            this.acceY = 0;
            this.scaleX = 1;
            this.width = 256;
            this.height = 512;
        }
        this.__keyControl();
        this.viewUpdate();

    };
    p.balloon = function(){
         if(this.__balloonHeight > 1200) {
            this.__balloonHeight = 0;
            this.stateUpdate = this.__jump;
            return false;
        } else {
            this.__balloonHeight += (this.lastY - this.y);
        }

        if(this.animation.currentAnimation != 'qiqiu') {
            this.animation.gotoAndPlay('qiqiu');
            this.speedY = -0.5;
            this.acceY = 0;
            this.scaleX = 1;
            this.width = 128;
            this.height = 128;
        }
        this.__keyControl();
        this.viewUpdate();
    };
    p.dead = function() {
        this.stateUpdate = this.__dead;
        this.animation.gotoAndPlay('dead');
        this.speedX = 0;
        this.speedY = 0.15;
        this.acceX = 0;
        this.acceY = 1 / 1000;
        this.scaleX = 1;
    };
    p.__dead = function() {
        if(this.deadHeight > 0) {
            var diffY = this.y - this.lastY, viewport = game.viewport;
            if(this.deadViewportFixed) {
            } else if(this.y >= viewport.y + 400) {
                viewport.move(0, diffY * 2);
            } else {
                this.deadViewportFixed = true;
            }

            this.deadHeight -= diffY;
        } else {
            console.log('over')
        }
    };
	p.reset = function(){
		this.width = 128;
        this.height = 128;
        this.scaleX = 1;
        this.speedX = 0;
        this.speedY = 0;
        this.acceX = 0;
        this.acceY = 0;
        this.direction = 'front';

         // 显示待机动画
        this.animation.gotoAndPlay('daiji');
        // 预备状态
        this.stateUpdate = this.__stateReady;
        // 高度数据清零
        this.__superJumpHeight = 0;
        this.__MJHeight = 0;
        this.__glidingHeight = 0;
        this.__UFOHeight = 0;
        this.__balloonHeight = 0;
        // 死亡数据清零
        this.deadHeight = 1000;
        this.deadViewportFixed = false;
	};
	
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
		this.addEventListener("tick",function (){
			var delta = new Date - start;
			start = new Date - 0;
    			 // if(that.controler.keyDownLeft) {
        //             that.scaleX = -1;
        //             that.x -= 14
        //         }

        //         if(that.controler.keyDownRight) {
        //             that.scaleX = 1;
        //             that.x += 14
        //         }

            if (that.y + that.height > 800) {
                that.speedY = -1.2
            }
            that.__borderCheck();
            that.update(delta / 1.3);
		})
	}

	dkg.Donkey = createjs.promote(Donkey, "Container");;
})(window.dkg || (window.dkg ={}));

dkg.KeyEvent.addListener();





























