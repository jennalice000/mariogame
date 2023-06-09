class BottomSensor extends Sensor{
    tick(){
        this.x =mario.x+5
        this.y =mario.y+mario.height
    }
}