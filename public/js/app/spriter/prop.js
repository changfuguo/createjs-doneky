/**
* @file class for donkey
* @author febody
* @date 2017/1/1
*/

(function (dkg) {
	function Prop(config) {
		this.Container_constructor();
		//以下属性是从 container集成过来的
		config = config || {};
		this.name = config.name || '';
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.width = 0;
		this.height = 0;

		this.__isStepon = false;
	}

	var PT = createjs.extend(Prop, createjs.Container);
	
	PT.init = function(stair){
		var that = this;
		if(this.animation && this.animation.parent){
            this.animation.parent.removeChild(this.animation);
        }
		this.spriteSheet =  new createjs.SpriteSheet(propFrames);
		var props = Object.keys(propFrames.animations);
		var prop = this.name || props[dkg.Random(0, props.length - 1)];
		this.name = prop;
		this.animation = new createjs.Sprite(this.spriteSheet,prop);
		this.addChild(this.animation);
	};

	PT.stepOn = function(donkey){
		if(this.__isStepon) {
            return false;
        }
        this.__isStepon = true;

        switch(this.name) {
            case 'spring01':
                donkey.jump();
                donkey.speedY = -3;
                this.width = 41;
                this.height = 14;
                donkey.animation.framerate = 0.2;
                break;
            case 'michael':
                this.width = 80;
                this.height = 45;
                donkey.stateUpdate = donkey.MJ;
                break;
            case 'super':
                this.width = 58;
                this.height = 84;
                donkey.stateUpdate = donkey.superJump;
                break;
            case 'gliding01':
                this.width = 75;
                this.height = 64;
                donkey.stateUpdate = donkey.gliding;
                break;
            case 'ufo':
                this.width = 71;
                this.height = 44;
                donkey.stateUpdate = donkey.UFO;
                break;
            case 'balloon':
                this.width = 54;
                this.height = 64;
                donkey.stateUpdate = donkey.balloon;
                break;
        }

        if (this.name == 'spring01') {
        	this.name = 'spring03';
            this.width = 41;
            this.height = 30;
        	this.animation.gotoAndPlay(this.name);
        } else {
        	if (this.parent) {
        		this.parent.removeChild(this);
        	}
        } 
	};
	dkg.Prop = createjs.promote(Prop, "Container");;
})(window.dkg || (window.dkg ={}));