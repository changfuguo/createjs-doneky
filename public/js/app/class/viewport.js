/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function ViewPort(conf) {
		
		this.x = conf.x || 0;
		this.y = conf.y || 0;
		this.width = conf.width || 480;
		this.height = conf.height || 800;

		this.lastX = this.x;
		this.lastY = this.y;
	}

	ViewPort.prototype.move = function(x, y, first){

		this.lastX = x;
		this.lastY = y;
		if(first) {
			this.x = x;
			this.y = y;
		} else {
			this.x += x;
			this.y += y;
		}
	}
	dkg.ViewPort = ViewPort;
	
})(window.dkg || (window.dkg ={}));