/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function Stair(config) {
		this.Container_constructor();
		//以下属性是从 container集成过来的
		config = config || {};
		this.name = config.name || '';
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.width = 0;
		this.height = 0;
		this.prop = null;

		this.speedX = 0;

		this.lastX = this.x;


	}

	var PT = createjs.extend(Stair, createjs.Container);
	PT.init = function(){
		var that = this;
		this.x = this.x || dkg.Random(128 +128, 480 - 128);
		if(this.animation && this.animation.parent){
            this.animation.parent.removeChild(this.animation);
        }
		this.spriteSheet =  new createjs.SpriteSheet(stairFrames);
		var staires = Object.keys(stairFrames.animations);
		var staire = this.name || staires[dkg.Random(0, staires.length - 1)];
		this.name = staire;
		this.animation = new createjs.Sprite(this.spriteSheet,staire);
		if (staire == 'moveable') {
			this.speedX = dkg.Random(10,20) / 1.3;
			if (dkg.Random(0, 1)) {
				this.speedX *= -1;
			}

			this.update = this._move;
			//console.log(this.animation)
		}

		if (staire == 'friable') {
			this.animation.paused = true;
		}
		
		this.addChild(this.animation);

		this.addEventListener("tick",function (){
			if (that.name == 'moveable') {
				that.x += that.speedX;
				that.update && that.update();
			}
		});
	};

	PT._move = function(){
		 if((this.x < 128 && this.speedX < 0) || (this.x > 358 && this.speedX > 0)) {
            this.speedX = -this.speedX;
        }

        // 道具随云层移动
        if(this.prop && this.lastX != 0) {
            this.prop.x += (this.x - this.lastX);
        }
	};
	dkg.Stair = createjs.promote(Stair, "Container");;
})(window.dkg || (window.dkg ={}));