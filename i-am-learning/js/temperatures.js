function showTemps() {
    var tempByHour = [59.2, 60.1, 60.3, 65, 62];

    for (var i = 0; i < 5; i++) {
        var theTemp = tempByHour[i];
        var id = "temp" + i;
        var li = document.getElementById(id);
        if (i == 0) {
            li.innerHTML = "The temperature at noon was" + theTemp;
        } else {
            li.innerHTML = "The temperature at " + i + " was " + theTemp;
        }
    }
}

window.onload = showTemps;