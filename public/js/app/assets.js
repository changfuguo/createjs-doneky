/**
*	@file assets for gloabal
*/

(function (ns) {
	
	var p ; //shortcut for preference 

	var properties = {
		width: 750,
		height: 1206,
		loadfest: [
			{
		        id : 'background',
		        src : 'images/system/background.jpg'
		    },{
		        id : 'icon',
		        src : 'images/system/icon.png'
		    }
		],
		manifest: [
			{
	        	id : 'floor',
	        	src : 'images/background/floor.png'
		    }, {
		        id : 'hill',
		        src : 'images/background/hill.png'
		    }, {
		        id : 'hillnear',
		        src : 'images/background/hillnear.png'
		    }, {
		        id : 'sky',
		        src : 'images/background/sky.jpg'
		    }, {
		        id : 'daiji',
		        src : 'images/frames/donkey/daiji.png'
		    }, {
		        id : 'dead',
		        src : 'images/frames/donkey/dead.png'
		    }, {
		        id : 'effect_qiqiu',
		        src : 'images/frames/donkey/effect_qiqiu.png'
		    }, {
		        id : 'jump',
		        src : 'images/frames/donkey/jump.png'
		    }, {
		        id : 'MJ',
		        src : 'images/frames/donkey/MJ.png'
		    }, {
		        id : 'plan',
		        src : 'images/frames/donkey/plan.png'
		    }, {
		        id : 'qiqiu',
		        src : 'images/frames/donkey/qiqiu.png'
		    }, {
		        id : 'run',
		        src : 'images/frames/donkey/run.png'
		    }, {
		        id : 'superjump',
		        src : 'images/frames/donkey/superjump.png'
		    }, {
		        id : 'UFO',
		        src : 'images/frames/donkey/UFO.png'
		    }, {
		        id : 'stair_friable',
		        src : 'images/frames/stair/stair_friable.png'
		    }, {
		        id : 'stair_moveable',
		        src : 'images/frames/stair/stair_moveable.png'
		    }, {
		        id : 'stair_stable_01',
		        src : 'images/frames/stair/stair_stable_01.png'
		    }, {
		        id : 'stair_stable_02',
		        src : 'images/frames/stair/stair_stable_02.png'
		    }, {
		        id : 'stair_stable_03',
		        src : 'images/frames/stair/stair_stable_03.png'
		    }, {
		        id : 'stair_stable_04',
		        src : 'images/frames/stair/stair_stable_04.png'
		    }, {
		        id : 'stair_stable_05',
		        src : 'images/frames/stair/stair_stable_05.png'
		    }, {
		        id : 'prop_spring01',
		        src : 'images/frames/props/prop_spring01.png'
		    }, {
		        id : 'prop_spring03',
		        src : 'images/frames/props/prop_spring03.png'
		    }, {
		        id : 'props_balloon',
		        src : 'images/frames/props/props_balloon.png'
		    }, {
		        id : 'props_gliding01',
		        src : 'images/frames/props/props_gliding01.png'
		    }, {
		        id : 'props_michael',
		        src : 'images/frames/props/props_michael.png'
		    }, {
		        id : 'props_super',
		        src : 'images/frames/props/props_super.png'
		    }, {
		        id : 'props_ufo',
		        src : 'images/frames/props/props_ufo.png'
		    }, {
		        id : 'cloud',
		        src : 'images/frames/effect/cloud.png'
		    }],
		sounds: [
			{
		        id : 'ogg_321',
		        src : 'audio/ogg_321'
		    }, {
		        id : 'ogg_balloon',
		        src : 'audio/ogg_balloon'
		    }, {
		        id : 'ogg_balloon_pick',
		        src : 'audio/ogg_balloon_pick'
		    }, {
		        id : 'ogg_btn_click',
		        src : 'audio/ogg_btn_click'
		    }, {
		        id : 'ogg_die',
		        src : 'audio/ogg_die'
		    }, {
		        id : 'ogg_firecrackers',
		        src : 'audio/ogg_firecrackers'
		    }, {
		        id : 'ogg_gliding',
		        src : 'audio/ogg_gliding'
		    }, {
		        id : 'ogg_gliding_pick',
		        src : 'audio/ogg_gliding_pick'
		    }, {
		        id : 'ogg_go',
		        src : 'audio/ogg_go'
		    }, {
		        id : 'ogg_jump',
		        src : 'audio/ogg_jump'
		    }, {
		        id : 'ogg_mj',
		        src : 'audio/ogg_mj'
		    }, {
		        id : 'ogg_mj_pick',
		        src : 'audio/ogg_mj_pick'
		    }, {
		        id : 'ogg_spring',
		        src : 'audio/ogg_spring'
		    }, {
		        id : 'ogg_step_broken',
		        src : 'audio/ogg_step_broken'
		    }, {
		        id : 'ogg_super',
		        src : 'audio/ogg_super'
		    }, {
		        id : 'ogg_super_pick',
		        src : 'audio/ogg_super_pick'
		    }, {
		        id : 'ogg_ufo',
		        src : 'audio/ogg_ufo'
		    }, {
		        id : 'ogg_ufo_pick',
		        src : 'audio/ogg_ufo_pick'
		    }, {
		        id : 'ogg_spring',
		        src : 'audio/ogg_spring'
		    }, {
		        id : 'ogg_background',
		        src : 'audio/ogg_background'
		    }
		]
	};
	dkg.assets = properties;
})(window.dkg || (window.dkg = {}));