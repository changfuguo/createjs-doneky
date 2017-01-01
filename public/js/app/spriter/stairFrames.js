var stairFrames ={
	images: [
						"../images/frames/stair/stair_friable.png",
						"../images/frames/stair/stair_moveable.png",
						"../images/frames/stair/stair_stable_01.png",
						"../images/frames/stair/stair_stable_02.png",
						"../images/frames/stair/stair_stable_03.png",
						"../images/frames/stair/stair_stable_04.png",
						"../images/frames/stair/stair_stable_05.png"
					],
	frames: 
		[
			
			//friable 0-5
			[0,0,256,128,0,128,64],
			[256,0,256,128,0,128,64],
			[512,0,256,128,0,128,64],
			[768,0,256,128,0,128,64],
			[1024,0,256,128,0,128,64],
			[1280,0,256,128,0,128,64],

			// moveable 14-47


			[0,0,256,128,1,128,64],
			[256,0,256,128,1,128,64],

			//stable_01 48
			[0,0,256,128,2,128,64],

			//stable_02 48
			[0,0,256,128,3,128,64],
			//stable_03 48
			[0,0,256,128,4,128,64],
			//stable_04 48
			[0,0,256,128,5,128,64],
			//stable_05 48
			[0,0,256,128,6,128,64],
		]

	,
	animations: {
		friable:  [0, 5, '', .3],
		moveable: [6, 7, 'moveable' , .3],
		stable_01:[8, 8, 'stable_01', .3],
		stable_02:[9, 9, 'stable_02', .3],
		stable_03:[10, 10, 'stable_03', .3],
		stable_04:[11, 11, 'stable_04', .3],
		stable_05:[12, 12, 'stable_05', .3],
	}
}
