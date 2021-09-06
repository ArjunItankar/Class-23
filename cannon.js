class Cannon{
    constructor(x, y, w, h, angle){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.cannonImage = loadImage("assets/cannon.png");
        this.cannonBaseImage = loadImage("assets/cannonBase.png");
        

    }
    display(){
        push();
            imageMode(CENTER);
            image(this.cannonImage, this.x, this.y, this.w, this.h);
        pop();
            image(this.cannonBaseImage, 70, 20, 200, 200);
            noFill();

    }
}