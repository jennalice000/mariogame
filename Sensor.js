class Sensor{
    constructor(container, width, height, x, y, bg){
        this.container=container;
        this.div;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.bg = bg;

        this.div=document.createElement("div");
        this.div.style.width=width+"px";
        this.div.style.height=height+"px";
        this.div.style.position="absolute";
        this.div.style.left=x+"px";
        this.div.style.top=y+"px";
        this.div.style.background = bg;

        this.container.appendChild(this.div)

    }
    tick(){
                //부모인 센서에게 물려받은 것 중 tick은 left센서에 적용할 수 없음.
        // 따라서 tick은 각 센서별로 코드를 작성하기
        //만일 자바언어였다면 아래의 메서드는 내용없는 추상메서드로 선언해야하나 ECMAScript2015는 추상메서드를 지원하지 않으므로 본 메서드를 그냥 비워만 둔다.
    }

    render(){
        this.div.style.left=x+"px";
        this.div.style.top=y+"px";

    }
}