//nor kerpari klasy
class Norkerpar extends Mayrakan{
    constructor(x, y, ind) {
        super(x, y, ind)
        this.energy = 5;
    }



    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }





    eat() {

        var emptyCord = this.getDirections(3);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                     break;

                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
               
               emptyCord = this.getDirections(1);

               cord = random(emptyCord);

                if (cord) {
                    this.multiply++;

                    var x = cord[0];
                    var y = cord[1];

                    matrix[y][x] = 5;
                    matrix[this.y][this.x] = 0;

                    this.x = x;
                    this.y = y;


                    for (var i in xotArr) {
                        if (x == xotArr[i].x && y == xotArr[i].y) {
                            xotArr.splice(i, 1);
                        }
                    }
                    if (this.multiply == 10) {
                        this.mul()
                        this.multiply = 0;
                    }

                } else {
                    this.move();
                    this.energy--;
                    if (this.energy < 3) {
                        this.die();
                        //this.energy = 10;
                    }
                }
            }
        }
    }
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var nornorkerpar = new Erkaker(x, y, this.index);
            gishatichArr.push(nornorkerpar);

            matrix[y][x] = 5;
            this.multiply = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in norkerparArr) {
            if (this.x == norkerparArr[i].x && this.y == norkerparArrr[i].y) {
                norkerparArr.splice(i, 1);
                break;
            }
        }
    }
}