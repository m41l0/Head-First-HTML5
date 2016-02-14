/**
 * Created by Maks on 14.02.2016.
 */
window.onload = init;
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}
function handleButtonClick() {
    var texInput = document.getElementById("songTextInput");
    var songName = texInput.value;
    var li = document.createElement("li");
    var ul = document.getElementById("playlist");

    if (songName != "") {
        alert("Adding " + songName);
        li.innerHTML = songName;
        ul.appendChild(li);
        save(songName);
    } else {
        alert("Please Enter Song Name");
    }
}