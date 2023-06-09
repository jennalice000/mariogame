class Mario extends GameObject{
    constructor(container, src, width, height, x, y, velX, velY){
        super(container, src, width, height, x, y, velX, velY)
        // 이 변수는 마리오의 이중점프를 막기 위한 논리값임
        // 마리오의 발바닥이 바닥에 닿았는지 여부를 판단하는 용도
        this.y = brickArray[i]
        this.falled=false;

        //Has a 관계 => Mario class has a Sensor.
        this.LeftSensor=new this.LeftSensor(this.container, 2, 50, this.x-2, this.y+10, 'red');
        this.RightSensor=new this.RightSensor(this.container, 2, 50, this.width, this.y+10, 'red');
        this.TopSensor=new this.TopSensor(this.container, 40, 2, this.x+5, this.y-3, 'red');
        this.BottomSensor=new this.BottomSensor(this.container, 40, 2, this.x+5, this.height, 'red');

    }
    hitCheck(){
        //벽돌 수 만큼 반복하면서 마리오와 각각의 벽돌간 충돌체크 
        for(let i=0;i<brickArray.length;i++){
            let result=collisionCheck(this , brickArray[i]);
            
            if(result){//i번째 벽돌과 마주쳤다면..
                //마주친 벽돌의 y축에서 마리오의 키(height)만큼을 위로
                //올려놓자 
                this.y=brickArray[i].y - this.height;
            }
        }   
    }

    //부모인 GameObject 에게 물려받은 재산 중 
    //tick() 메서드는 현재 마리오 상황에 맞지 않는다.
    //이때 개발자는 부모에게 물려받은 메서드를 자기만의
    //코드로 업그레이드할 수 있는데, 이러한 메서드 정의
    //기법을 가리켜 오버라이딩(OverRiding...)

    // dlekddldldldl
    tick(){
        this.velY+=g;
        //console.log(this.velY);
        
        if(this.velY>8){
            this.velY=8;
        }
        this.x+=this.velX;
        this.y+=this.velY;  
        
        // 마리오가 보유한 센서막대들에 대해서도 tick()
        this.LeftSensor.tick(); //오버라이딩한 tick()method
        this.LeftSensor.render();//Sensor부모의 메서드
        this.RightSensor.tick();
        this.RightSensor.render();
        this.TopSensor.tick();
        this.TopSensor.render();
        this.BottomSensor.tick();
        this.BottomSensor.render();

        this.hitCheck();
    }

}