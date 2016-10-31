/**
 * 人物基类 所有人物角色均继承与此类
 */
//BasePeople
(function() {
    function BasePeople(){
        this.Container_constructor();

        this.walkSpeedX = 2;
        this.walkSpeedY = 0.5;
        this.runSpeedX = 5;
        this.runSpeedY = 0.5;
        this.jumpHeight = 30;
        this.runJumpHeight = 35;
        this.arrow = "right";
        this.setSpriteData();

         this.skewX = 180;
        console.log(this)
    }
    var p = createjs.extend(BasePeople,createjs.Container);
    p.setSpriteData = function (){

    }
    p.stand = function (){

        this.animation.gotoAndPlay("stand");
    };
    p.move = function (x,y){
        this.x +=x;
        this.y +=y;
    }
    p.startWalk = function (sx,sy){
        this.changeStop();
        this.animation.gotoAndPlay("walk");
        var a ;
        if(sx > 0)
        {
            a = "right";
        }
        else if(sx < 0)
        {
            a = "left";
        }
        if(this.arrow != a) this.changeArrow(a);
        this.sx = sx;
        this.sy = sy;
        var _this = this;
        this.addEventListener("tick",this._walking = function (){_this.walking()})
    }
    p.walking = function (){
        this.move(this.sx,this.sy)
    }
    p.stopWalk = function (){
        this.animation.gotoAndPlay("stand");
        this.removeEventListener("tick",this._walking)
    }
    p.startRun = function (sx,sy){
        this.changeStop();
        this.animation.gotoAndPlay("run");
        var a ;
        if(sx > 0)
        {
            a = "right";
        }
        else if(sx < 0)
        {
            a = "left";
        }
        if(this.arrow != a) this.changeArrow(a);
        this.sx = sx;
        this.sy = sy;
        var _this = this;
        this.addEventListener("tick",this._runing = function (){_this.runing()})
    }
    p.runing = function (){
        this.move(this.sx,this.sy)
    }
    p.stopRun = function (){
        this.animation.gotoAndPlay("stand");
        this.removeEventListener("tick",this._runing)
    }
    p.startDecelerate = function (){
        this.decelerateTime = 0;
        this.changeStop();
        this.animation.gotoAndPlay("somersault");
        var _this = this;
        this.addEventListener("tick",this._decelerateing = function (){_this.decelerateing()})
    }
    p.decelerateing = function (){
        this.decelerateTime +=1;
        this.sx = this.sx*0.95;
        this.sy = this.sy*0.95;
        this.move(this.sx,this.sy);
        if( this.animation.currentFrame == 0)
        {
            this.stopDecelerate();
        }
    }
    p.stopDecelerate = function (){
        this.animation.gotoAndPlay("stand");
        this.removeEventListener("tick",this._decelerateing)
    }
    p.changeArrow = function(arrow){
        this.arrow = arrow;
        if(arrow == "left")
        {
            this.animation.scaleX = Math.abs( this.animation.scaleX) * -1;
        }
        else
        {
            this.animation.scaleX = Math.abs( this.animation.scaleX);
        }
    }
    p.startAttack = function (type){//攻击动作 1 2 是左勾拳和右勾拳随机出现 3是最后的浮空攻击
        this.changeStop();
        if(type == 3)
        {
            this.animation.gotoAndPlay("attack3");
        }
        else
        {
            if(Math.random() > 0.5)
            {
                this.animation.gotoAndPlay("attack1");
            }
            else
            {
                this.animation.gotoAndPlay("attack2");
            }
        }

        this.removeEventListener("tick",this._attacking);//之后需要换成排队攻击
        var _this = this;
        this.addEventListener("tick",this._attacking = function (){_this.attacking()})
    }
    p.attacking = function (){
        // this.move(-0.5,0);
        if(this.animation.currentFrame == 0)
        {
            this.stopAttack();
        }
    }
    p.stopAttack = function (){
        this.animation.gotoAndPlay("stand");
        this.removeEventListener("tick",this._attacking);
    }
    p.jump = function (){
        this.animation.gotoAndPlay("jump");
        this.jumpNum = this.jumpHeight;
        this.jumpY = this.y;
        var _this = this;
        this.addEventListener("tick",this._jumping = function (){_this.jumping()})
    }
    p.jumping = function (){
        var list =  this.data.animations.jump.frames;
        if( this.animation.currentFrame == list[list.length - 1])
        {
            this.jumpNum -=3;
            this.move(0,-this.jumpNum);
            if(this.y >= this.jumpY)
            {
                this.y = this.jumpY;
                this.stopJump();
            }
        }
    }
    p.stopJump = function(){
        this.removeEventListener("tick",this._jumping);
        this.changeStop();
        this.animation.gotoAndPlay("crouch");
    }
    p.runJump = function (){
        this.animation.gotoAndPlay("runJump");
        this.jumpNum = this.runJumpHeight;
        this.jumpY = this.y;
        var _this = this;
        this.addEventListener("tick",this._runJumping = function (){_this.runJumping()})
    }
    p.runJumping = function (){
        this.jumpNum -=4;
        this.move(this.sx,-this.jumpNum);
        var list = this.data.animations.runJump.frames;

        if( this.animation.currentFrame == list[list.length - 1] && this.jumpNum < 20)//之后会改成有踢腿标识时开始踢
        {
            this.animation.gotoAndPlay("runJumpAttack");
        }
        if(this.y >= this.jumpY)
        {
            this.y = this.jumpY;
            this.stopRunJump();
        }
    }
    p.stopRunJump = function (){
        this.removeEventListener("tick",this._runJumping);
        this.changeStop();
        this.animation.gotoAndPlay("crouch");
    }
    p.changeStop = function (){//因需要切换动作而停止当前的动作侦听
        this.removeEventListener("tick",this._walking);
        this.removeEventListener("tick",this._runing);
        this.removeEventListener("tick",this._decelerateing);
    }
    cls.BasePeople = createjs.promote(BasePeople, "Container");
}());