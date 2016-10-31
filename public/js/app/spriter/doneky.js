/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function Donkey() {

		this.x = 0;

		this.y = 0;

		// front || left || right
		this.direction = 'front'

		//speed 

		this.speedX = 1;

		this.speedY = .5;

		//width 
		this.width = 0;

		//height

		this.height = 0;

		//alpha

		this.alpha = 1;

		//rotation 

		this.rotation = 0;

		
	}

	var p = createjs.extend(Donkey, createjs.Container);

	p.initSprites = function() {
		var data = {
			images: ['daiji', 'dead', 'jump', 'MJ', 'plan', 'qiqiu', 'run', 'superjump', 'UFO'],
			animations: {
				daiji: {
					frames: [0, 0, 128, 128, 0, 64, 64],
					next: 'daiji',
					speed: .5
				},
				dead: {
					frames: [0, 5, 128, 128, 1, 64, 64],
					next: 'daiji',
					speed: .5
				},
				jump: {
					frames: [0,33, 128, 128, 2, 64, 64]
				},
				jump_MJ: {
					frames: [0, 13, 128, 128]
				}
			}
		}
	}
})(window.dkg);






























