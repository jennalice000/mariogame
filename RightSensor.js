class RightSensor extends Sensor{
    tick(){
        this.x = mario.width;
        this.y = mario.y+10;
    }
}