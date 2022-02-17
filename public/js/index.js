function age(){
    var xhr = new XMLHttpRequest()
    //xhr.open("Get", "/js/data.json")
    //xhr.open("Get", "http://localhost:3001/football")
    xhr.open("Get", "https://amandaandrae-backend.herokuapp.com/football")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

var anElement = document.getElementById("app");
//create button function
const createButton = (text = 'No text') => {
    const btn = document.createElement('button');
    btn.innerText = text;
    document.body.appendChild(btn);
    return btn; 
}
const button = createButton('Hämta tabell');


//skapa nytt element
var anElement2 = document.createElement("strong");
anElement.appendChild(anElement2);


button.addEventListener('click', () => {
    age();
})

function createTable(data){
	var appElement = document.getElementById("app")
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points))
    aTable.appendChild(createRow(data[1].name, data[1].points))
    aTable.appendChild(createRow(data[2].name, data[2].points))
    aTable.appendChild(createRow(data[3].name, data[3].points))
}

function createRow(name, points){
    var aRow = document.createElement("tr");
    aRow.appendChild(createCell(name));
    aRow.appendChild(createCell(points));
    return aRow;
}

function createCell(content){
    var aCell = document.createElement("td");
    aCell.innerHTML = content;
    return aCell;
}

function createCellWithImage(url){
    var aCell = document.createElement("td")
    var anImage = document.createElement("img")
    anImage.src = url
    anImage.classList.add("logo")
    aCell.appendChild(anImage)
    return aCell;
}

age()


/* 
document.getElementById()
document.createElement()
anElement.innerHTML
anElement.outerHTML
anElement.appendChild
 */
