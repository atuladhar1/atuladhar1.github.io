const url = "https://api.opendota.com/api/players/250311977/recentMatches";

function Get(url) {
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET", url, false);
    httpreq.send(null);
    return httpreq.responseText;
};

function addTableRow(data) {

    var table = document.getElementById("table"),
        newRow = table.insertRow(table.length),
        match = newRow.insertCell(0),
        kills = newRow.insertCell(1),
        deaths = newRow.insertCell(2),
        assists = newRow.insertCell(3);
    match.innerHTML = data.match_id;
    kills.innerHTML = data.kills;
    deaths.innerHTML = data.deaths;
    assists.innerHTML = data.assists;
};

var data = JSON.parse(Get(url));
for (i = 0; i < 15; i++) {
    addTableRow(data[i]);
}