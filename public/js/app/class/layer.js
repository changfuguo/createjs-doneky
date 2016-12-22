/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function Layer() {
		this.Container_constructor();
	}

	dkg.Layer = createjs.promote(Layer, "Container");;
	
})(window.dkg || (window.dkg ={}));