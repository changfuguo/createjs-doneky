/**
* @file class for donkey
* @author febody
* @date 2016/8/28
*/

(function (dkg) {
	function donkeyManager() {
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
	}

	var PT = donkeyManager.prototype;

})(window.dkg||(window.dkg = {})