//խոտի կլասը
class Grass extends Mayrakan {
    constructor(x, y, ind) {
        super(x, y, ind)
        this.energy = 5;
    }

      mul() {
        this.multiply++;
        if (this.multiply == 3) {
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }

     }


    
}


