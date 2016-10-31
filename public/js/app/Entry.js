/**
*	@file entry for game 
*	@author febody
*	@author 2016/8/28
*
*/


(function (dkg) {
	// body...

	var $id = dkg.$ = function (id) {
		return document.getElementById(id);
	}

	//
	dkg.playSound = function(id) {

	}
	//
	dkg.stopSound = function(id) {

	}

	/**
	*	@desc for reserved decimal
	*	@{Number} number
	*	@{Number} reserved
	*/
	var decimal = dkg.decimal = function(number, reserved) {
		number = number - 0;
		reserved = reserved || 0;
		var r = Math.pow(10, reserved);
		if(typeof number === 'number') {
			number =  Math.ceil( Math.floor(number * r)) / r;
		}
		return number;
	}

	var hide = dkg.hide = function(dom) {
		if (dom) {
			dom.style.display = 'none';
		}
	}
	var show = dkg.show = function(dom) {
		if (dom) {
			dom.style.display = 'block';
		}
	}
	/*
	*
	*
	*/
	var assets = dkg.assets;
	var gameContainer = $id('donkeyJump');
	var gameCover = $id('gameCover');
	var btnSound = $id('btnSound');
	var btnCup = $id('btnCup');
	var btnScore = $id('btnScore');
	var btnPlay = $id('btnPlay');
	var gameBody = $id('gameBody');
	var gameOver = $id('gameOver');
	// 进度条展示
	var progressText = $id('progressText');

	// 	是否图片准备好
	//	是否
	var isImagesReady = false;
	var isSoundReady = false;

	var loadingSetting = {
		"manifest": "正在加载图片...",
		"sounds": "正在加载音频..."
	};
	var loadingType = 'manifest';
	var entry = {
		init : function() {
		   this.initialEvent();
		},
		initialEvent: function () {
			var that = this;
			btnSound.addEventListener('click', function() {
				if(btnSound.className.indexOf('disabled') > -1) {
					btnSound.className = btnSound.className.replace('disabled','');
				} else {
					btnSound.className = btnSound.className + ' disabled';
				}
			})

			btnPlay.addEventListener('click', function() {
				that.loadResources()
			});
		},
		loadResources: function() {
			// images = images || {};
		 //    stage = new createjs.Stage(canvas);
		 //    stage.autoClear = false;
		 //    container = new createjs.Container();
		 //    stage.addChild(container);
		 //    createjs.Touch.enable(stage);

		    var that = this;
		    var loader = new createjs.LoadQueue(true);
		    loader.addEventListener("fileload", function(e) {
		    	that.handleFileLoad(e);
		    });
		    loader.addEventListener("progress", function(e) {
		    	that.handlingFileLoad(e);
		    });
		    loader.addEventListener("complete",function(e) {
		    	 that.loadLoadingComplete(e);
		    });
		    loader.loadManifest(assets[loadingType]);

		    // createjs.Ticker.setFPS(dkg.assets.properties.fps);
		    // createjs.Ticker.addEventListener("tick", stageBreakHandler);
		},
		start: function() {

		},
		handlingFileLoad: function(e) {
			progressText.innerHTML= (loadingSetting[loadingType] + decimal(e.progress * 100 , 2) + '%');
		},
		handleFileLoad: function(e) {
			
		},
		loadLoadingComplete: function(e) {
			delete loadingSetting[loadingType];
			if (loadingType == 'manifest') {
				isImagesReady = true;
			}
			if (loadingType == 'sounds') {
				isSoundReady = true;
			}
			loadingType = null;
			for (var attr in loadingSetting) {
				if (loadingSetting.hasOwnProperty(attr)) {
					loadingType = attr;
					break;
				} 
			}

			if (loadingType) {
				this.loadResources(loadingType);
			} else {
				progressText.innerHTML = ' ';
				hide(gameCover);
				hide(gameOver);
				show(gameBody);
				this.start();
			}
		}
	}

	entry.init();
})(window.dkg = window.dkg || {})