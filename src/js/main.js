import {multiply} from './math.js';

function computeTables(maxNumber, untilTimes) {
    var tables = [];
    for(var i=1; i<=maxNumber; i++){
        var row = [];
        for (var j=1; j<=untilTimes; j++){
            row.push(multiply(i, j));
        }
        tables.push(row);
    }
    return tables;
}

function updateTable(tables){
    var tableElement = document.getElementById("multiplication-table");
    // tableElement.innerHTML=undefined
    var thead = document.getElementsByTagName("thead");
    if (thead.length>0){
        tableElement.removeChild(thead[0]);
    }

    var tbody = document.getElementsByTagName("tbody");
    if (tbody.length>0){
        tableElement.removeChild(tbody[0]);
    }


    var renderTableHeader = function(firstRow){
        var thead = document.createElement("thead");
        var row = document.createElement("tr");
        for (var i=0; i<=firstRow.length; i++){
            var cell = document.createElement("th");
            cell.setAttribute("scope", "col");
            cell.innerHTML = (i==0)? "TIMES": i;
            row.appendChild(cell);
        }
        thead.appendChild(row);
        tableElement.appendChild(thead);
    };

    var renderTableRows = function(tables){
        var tbody = document.createElement("tbody");
        tableElement.appendChild(tbody);
        
        for(var row=0; row<tables.length; row++){
            var rowElement = document.createElement("tr");
            var rowHeader = document.createElement("th");
            rowHeader.setAttribute("scope", "row");
            rowHeader.innerHTML = row+1;
            rowElement.appendChild(rowHeader);

            for (var col=0; col<tables[row].length; col++){
                var cell = document.createElement("td");
                cell.innerHTML = tables[row][col];
                rowElement.appendChild(cell);
            }
            tbody.appendChild(rowElement);
        }
    };

    renderTableHeader(tables[0]);
    renderTableRows(tables);
}

window.onload = function() {
    var tables = computeTables(10, 16);
    updateTable(tables);
};