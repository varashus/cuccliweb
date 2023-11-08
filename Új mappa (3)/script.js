let webAppsData = [
    {"name": "Google Search", "users": "2 Billion"},
    {"name": "YouTube", "users": "1.9 Billion"},
    {"name": "Facebook", "users": "2.8 Billion"},
    {"name": "Gmail", "users": "1.5 Billion"},
    {"name": "WhatsApp Web", "users": "2 Billion"},
    {"name": "Amazon", "users": "300 Million"},
    {"name": "Twitter", "users": "330 Million"},
    {"name": "Zoom", "users": "300 Million"},
    {"name": "LinkedIn", "users": "740 Million"},
    {"name": "Google Drive", "users": "1 Billion"}
];
//adatokat konvetálja

//táblázatba az adatok belvasása

//ablak betöltésekor adatok megjelnítése
function convert(usersString){
    let users = parseFloat(usersString);
    if (usersString.includes('Billion')) {
        users *= 1000;

    }
    return users;
}
function BuildTable(data){
    // tablazat elemeit eltaroljuk
    let table = document.getElementById("webAppstable") 
    console.log(table)

    //sorok esetén törlés
    while (table.row.length > 1) {
        table.deleteRow(1);
    }

    for (let i = 0; i < data.length; i++) {
        //szükséges html elemek létrehozása
        let row = document.createElement('tr');
        // a név
        let nameCell = document.createElement('td');
        nameCell.textContent = data[i].name;
        row.appendChild(nameCell);
        //userek szama
        let usersCell = document.createElement('td');
        usersCell.textContent = data[i].users;
        row.appendChild(usersCell);

        table.appendChild(row)
    }
}
window.onload = function(){
BuildTable(webAppsData);
//sortmost
document.getElementById("SortMost").addEventListener('click',function(){
    webAppsData.sort(function (a,b) {
        return convert(b.users) - convert(a.users) 
    })
    BuildTable(webAppsData);
})
//sortfewest
}
document.getElementById("SortFewest").addEventListener('click',function(){
    webAppsData.sort(function (a,b) {
        return convert(a.users) - convert(b.users) 
    })
    BuildTable(webAppsData);
})

