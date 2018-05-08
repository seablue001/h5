function Screen01(resource={}){
	//资源列表
	this.resource = resource;
	this.init();
}

//初始化
Screen01.prototype.init = function(){
	//初始化
	//解锁路径 x,y,deg
	var path = [
		[332,375,-40],
		[466,288,-18],
		[625,244,0],
		[783,281,30],
		[930,350,-15],
		[1040,270,-90]
	];

	var flowerPathArr = [];
	for(var i=0;i<path.length;i++){
		var flowerPath = new createjs.Bitmap(this.resource.flowerPath);
		
		flowerPath.setTransform(path[i][0], path[i][1], .6, .6, path[i][2]);
		// var blurFilter = new createjs.BlurFilter(0, 5, 2);
 	// 	flowerPath.filters = [blurFilter];
 	// 	var bounds = blurFilter.getBounds();
		// flowerPath.cache(-50+bounds.x, -50+bounds.y, 200+bounds.width, 100+bounds.height);

		flowerPath.alpha = 0.3;

		flowerPathArr.push(flowerPath);
		this.flowerPath = flowerPathArr;
		container01.addChild(flowerPath);
	}

	//花朵 flower
	//位置
	var flowerPath = [
		[307,403],
		[421,316],
		[571,266],
		[741,261],
		[866,356],
		[1041,331],
		[1051,171]
	];
	var flowerArr = [];
	for(var i=0;i<7;i++){
		var tempPic = new createjs.Bitmap(this.resource.flower);
		var flowerPic = tempPic;
		flowerPic.x = flowerPath[i][0];
		flowerPic.y = flowerPath[i][1];
		flowerPic.regX = 31;
		flowerPic.regY = 31;

		flowerArr.push(tempPic);
		this.flower = flowerArr;
		container01.addChild(tempPic);
	}

	//鼠标移动事件
	var that = this;
	stage.addEventListener('stagemousemove',function(evt){
		//获取鼠标坐标
		var x = evt.stageX;
		var y = evt.stageY;
		for(var i=0;i<7;i++){
			var landscapeBool = false;
			var portraitBool = false;
			//取得横屏、竖屏时的坐标在花朵范围内判断表达式 
			if(direction == 'landscape'){
				landscapeBool = (x >= flowerPath[i][0]-31 && x <= (flowerPath[i][0]+62-31)) && (y >= flowerPath[i][1]-31 && y <= (flowerPath[i][1]+62-31));
			}
			// if(direction == 'portrait'){
			// 	portraitBool = (x >= (1400-flowerPath[i][1]-31) && x <= (1400-flowerPath[i][1]+62-31) && (y >= (595-flowerPath[i][0]-31)) && (y <= (595-flowerPath[i][0]+62-31)));
			// }
			if(landscapeBool){
				if(flowerArr[i].state == 'rotation'){
					return false;
				}
				if(i != 0 && flowerArr[i-1].state != 'rotation'){
					return false;
				}
				//隐藏手势
				gestureAnimation.alpha = 0;
				createjs.Ticker.setFPS(30); 
				flowerArr[i].state = 'rotation';
				var tween = createjs.Tween.get(flowerArr[i],{loop:true},true)
			    			.to({rotation:360}, 1500);

			    //高亮显示路径
			    if(i>0){
			    	createjs.Tween.get(flowerPathArr[i-1])
			    			.to({alpha:1}, 1000);

			    	if(i == 6){
			    		//变换 隐藏场景1的素材
			    		container01.alpha = 1;
			    		for(i in that.flower){
			    			new createjs.Tween.get(that.flower[i])
			    			.to({alpha:0},1500);
			    		}

			    		for(i in that.flowerPath){
			    			new createjs.Tween.get(that.flowerPath[i])
			    			.to({alpha:0},1500);
			    		}

			    		new createjs.Tween.get(that.optipwords)
			    			.to({alpha:0},1500);
			    		
			    		//切换到场景2
			    		screen = 2;
			    	}
			    }
			}
		}
	});

	this.flower = flowerArr;

	//手势
	//创建精灵
	var gestureSprite = new createjs.SpriteSheet({
		images:[this.resource.gesture],
		frames:{
			width:218,
			height:200,
			count:5
		},
		animations:{
			 run: {
	            frames: [0,1,2,3,4,4,0]
	        }
		}
	});
	gestureAnimation = new createjs.Sprite(gestureSprite,"run");
	gestureAnimation.setTransform(300, 430, 1, 1, -35);
	container01.addChild(gestureAnimation);
	
	//操作提示文字
	var optipwords = new createjs.Bitmap(this.resource.optipwords);
	optipwords.x = 540;
	optipwords.y = 520;
	this.optipwords = optipwords;
	container01.addChild(optipwords);
}



