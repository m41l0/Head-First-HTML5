/*
var drink = "Beer";
var lyrics = "";
var cans = 99;

while (cans > 0) {
    lyrics = lyrics + cans + " cans of " + drink + " on the wall <br>";
    lyrics = lyrics + cans + " cans of " + drink + "<br>";
    lyrics = lyrics + "Take one down, pass it arround,<br>";

    if (cans > 1) {
        lyrics = lyrics + (cans - 1) + " cans of " + drink + " on the wall <br>";
    }
    else {
        lyrics = lyrics + "No more cans of " + drink + " on the wall <br>";
    }

    cans = cans - 1;
}

document.write(lyrics);*/

var tops = 5;
while (tops > 0) {
    for (var spins = 0; spins < 3; spins++) {
        document.write("Top is spinning!<br>");
    }
    tops = tops - 1;
}