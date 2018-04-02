var matrix = []
var side = 10;
var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var erkakerArr = [];
var norkerparArr = [];


var erk = 50;
var bar = 50;
var grasscount = 70;
var eatcount = 70;
var gishcount = 30;
var erkakercount = 10;
var norkerparcount = 5;
var wheaterContenier;

function setup() {
    for (var i = 0; i < erk; ++i) {
        matrix.push([]);
        for (var j = 0; j < bar; ++j) {
            matrix[i][j] = 0;
        }
    }


    var c = 0;
    while (c < grasscount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
            c++
        }
    }

    var c = 0;
    while (c < eatcount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
            c++
        }
    }

    var c = 0;
    while (c < gishcount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
            c++
        }
    }

    var c = 0;
    while (c < erkakercount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[y][x] = 4;
            c++;
        }



    }
    var c = 0;
    while (c < norkerparcount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[y][x] = 5;
            c++;
        }


    }


    noStroke()
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishatichArr.push(gishatich);
            } else if (matrix[i][j] == 4) {
                var gishatich = new Erkaker(j, i, 4);
                gishatichArr.push(gishatich);
            } else if (matrix[i][j] == 5) {
                var gishatich = new Norkerpar(j, i, 5);
                gishatichArr.push(gishatich);
            }
        }
    }
    wheaterContenier = document.getElementById("wheater");

}

var f = 0;
function draw() {


    var xotcol;
    f++
    console.log(f);

    if (f < 10) {

        wheaterContenier.innerHTML = "Garun";
        wheaterContenier.style.color = "green";
        xotcol = "green";

    }
    else if (f < 20) {
        wheaterContenier.innerHTML = "amar";
        wheaterContenier.style.color = "#ccff99";
        xotcol = "#ccff99";
    }
    else if (f < 30) {
        wheaterContenier.innerHTML = "ashun";
        wheaterContenier.style.color = "#ff6600";
        xotcol = "#ff6600"
    }
    else if (f < 40) {
        wheaterContenier.innerHTML = "dzmer";
        wheaterContenier.style.color = "#ccffff";
        xotcol = "#ccffff"
    }
    else {
        (f < 0)

    } 


    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill(xotcol);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill(255, 0, 0);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill("#33BBFF");
                ellipse(j * side + side / 2, i * side + side / 2, side, side);
            } else if (matrix[i][j] == 5) {
                fill("#000099");
                ellipse(j * side + side / 2, i * side + side / 2, side, side);
            }
        }
    }

    for (var i in xotArr) {
        xotArr[i].mul();

    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }

    if (gishatichArr.length > 30) {
        for (var i in erkakerArr) {
            erkakerArr[i].eat();
        }

    }
    if (norkerparArr.length > 60) {
        for (var i in norkerparArr) {
            norkerparArr[i].eat();
        }

    }


}
