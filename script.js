const url = "https://api.opendota.com/api/players/250311977/recentMatches?api_key=250311977";
const a = document.getElementById("last");
var str = ""

function Get(url) {
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET", url, false);
    httpreq.send(null);
    return httpreq.responseText;
}
var data = JSON.parse(Get(url));
var last_game = data[0];
console.log(last_game);
a.innerHTML = "Match ID: " + last_game.match_id + "\n";
a.appendChild(document.createElement("br"));
a.innerHTML = "Kills: " + last_game.kills + "\n";
a.appendChild(document.createElement("br"))
a.innerHTML = "Assists: " + last_game.assists + "\n";
a.appendChild(document.createElement("br"))
a.innerHTML = "Deaths: " + last_game.deaths + "\n";