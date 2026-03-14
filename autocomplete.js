const allStops = [
"Southern Central","Sunshine Station","Central Hospital","Northern Interchange","Rocky Road",
"Sunshine University","Eastmallow","Central","Containers Island Bus Terminus","Dove Estate",
"Norton Town Center","Senpai Shopping Centre","Kamaya","Zone 7 Interchange","Rainbow Estate",
"Eastmallow Praya Road","Leafy Bay","Long Island Ferry Pier","Sunshine Pier","Sunshine Stadium"
];

function autocompleteStart(){
    let input=document.getElementById("startStop");
    let val=input.value;
    let suggestions=allStops.filter(s=>s.toLowerCase().includes(val.toLowerCase()));
    if(suggestions.length>0) input.value=suggestions[0];
}

function autocompleteEnd(){
    let input=document.getElementById("endStop");
    let val=input.value;
    let suggestions=allStops.filter(s=>s.toLowerCase().includes(val.toLowerCase()));
    if(suggestions.length>0) input.value=suggestions[0];
}
