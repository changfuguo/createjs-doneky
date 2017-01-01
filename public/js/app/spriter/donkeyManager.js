/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function donkeyManager(canvas) {
		 /**
         * 视口对象
         */
        this.viewport = null;

        /**
         * 天空背景层
         */
        this.skyLayer = null;

        /**
         * 远景山丘背景层
         */
        this.hillLayer = null;

        /**
         * 近景山丘背景层
         */
        this.hillNearLayer = null;

        /**
         * 房子背景层
         */
        this.floorLayer = null;

        /**
         * 白云精灵层
         */
        this.stairLayer = null;

        /**
         * 驴子精灵层
         */
        this.donkeyLayer = null;

        /**
         * 效果精灵层
         */
        this.effectLayer = null;

        /**
         * 驴子
         */
        this.donkey = null;
        /**
         * 视口的初始化位置
         */
        this.viewportDefault = [0, 45440];
        /**
         * 得分
         */
        this.score = 0;
        /**
         * UI对象
         */
        this.ui = null;
        /**
         * 按键状态
         */
        this.keyDownLeft = false;
        this.keyDownRight = false;

        /**
         * 预备时间
         */
        this.readyTime = 5;

        /**
         * 是否即将开始
         */
        this.isGo = false;

        /**
         * 上一朵云的位置
         */
        this.lastStairY = 0;

        this.container = canvas;
        this.init();
	}
    var PT = donkeyManager.prototype;
    PT.init = function(){
        var stage = new createjs.Stage(this.container);
        createjs.Ticker.setFPS(30);
        createjs.Touch.enable(stage);
        this.stage = stage;
    };

    PT.moveViewPort = function(x, y, abs){

    }

    PT.stateInit = function(){
        this.viewport.move(this.viewportDefault[0], this.viewportDefault[1], true);
        this.donkey.x = 100;
        this.donkey.y = 600//this.viewportDefault[1] + 530;
        this.donkey.minTop = this.donkey.y;

        this.__createDefaultStair();
    };

    PT.__createDefaultStair = function(){
        this.lastStairY = this.viewportDefault[1] + 100;
        var stair = new dkg.Stair({name:"moveable",y: 600});
        stair.init();
        this.stairLayer.addChild(stair);
    };
    PT.createLayer =  function(){

        this.viewport = new dkg.ViewPort({width: 480, height: 800});
        var skyLayer  = new createjs.Container();
        var hillLayer = new createjs.Container();
        var hillNearLayer = new createjs.Container();
        var floorLayer = new createjs.Container();
        var stairLayer = new createjs.Container();
        var donkeyLayer = new createjs.Container();
        var effectLayer = new createjs.Container();
        
        this.skyLayer = skyLayer;
        this.hillNearLayer = hillNearLayer;
        this.floorLayer = floorLayer;
        this.stairLayer = stairLayer;
        this.donkeyLayer = donkeyLayer;
        this.effectLayer = effectLayer;

        this.stage.addChild(skyLayer);
        this.stage.addChild(hillLayer);
        this.stage.addChild(hillNearLayer);
        this.stage.addChild(floorLayer);
        this.stage.addChild(stairLayer);
        this.stage.addChild(donkeyLayer);
        this.stage.addChild(effectLayer);


    };
    PT.createUI = function(){

    };

    PT.viewportUpdate = function(){
        console.log('viewportUpdate')
    };

    PT.createDonkey = function(){
        var donkey = this.donkey = new dkg.Donkey();
        donkey.controler = this;
        this.donkeyLayer.addChild(donkey);
        this.donkeyLayer.setBounds(0,0,480,800);
    };
    PT.createSence = function(){
        var sky = new createjs.Bitmap("../images/background/sky.jpg");
        sky.setBounds(0,0,480,800);
        sky.y = 800 - 3072;
        this.skyLayer.addChild(sky);
    };

    PT.updateLayerChild = function(layer){
        var children = layer.children || [];
        for(var i = 0; i < children.length; i++) {

        }
    };
    PT.start = function(){
        this.createLayer();
        this.createDonkey();
        this.createSence();
        this.createUI();

        this.stateInit();
        this.donkey.jump();
    }
    PT.update = function(e){
       
        this.updateLayerChild(this.skyLayer);
        this.stage.update();
        if(dkg.KeyEvent.check('VK_LEFT') || dkg.KeyEvent.check('A')) {
            this.keyDownLeft = true;
            this.donkey.speedX *= -1;
        } else {
            this.keyDownLeft = false;
        }

        if(dkg.KeyEvent.check('VK_RIGHT') || dkg.KeyEvent.check('D')) {
            this.keyDownRight = true;
            this.donkey.speedX *= -1;
        } else {
            this.keyDownRight = false;
        }

        if (this.keyDownLeft) {
            this.donkey.direction = 'left';
        } else if(this.keyDownRight) { 
            this.donkey.direction = 'right';
        }
    };
    dkg.DonkeyManager = donkeyManager;

})(window.dkg||(window.dkg = {}));