const url = "https://api.opendota.com/api/players/250311977/recentMatches?api_key=56db64c5-54aa-4e93-a46b-1f234b4b6004";

function setup() {
    loadJSON(url, gotData);
}