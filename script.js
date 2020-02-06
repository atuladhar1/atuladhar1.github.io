const url = "https://api.opendota.com/api/players/250311977/recentMatches?api_key=250311977"

function Get(url) {
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET", url, false);
    httpreq.send(null);
    return httpreq.responseText;
}
document.getElementById("last").innerHTML = "fart";
var data = JSON.parse(Get(url));
console.log(data[0]);