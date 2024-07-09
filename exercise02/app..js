var employeeID = 2;
var table; 
var currentID;
const oneDay = 24 * 60 * 60 *1000
const currentDay = new Date();

function add() {

    table = document.getElementById("Employee");
    var button = document.createElement('button');
    
    
    button.innerHTML = "Delete";
    var row = table.insertRow(employeeID);
    var c0 = row.insertCell(0);
    var c1 = row.insertCell(1);
    var c2 = row.insertCell(2);
    var c3 = row.insertCell(3);
    var c4 = row.insertCell(4);

    c0.innerHTML = document.getElementById("taskname").value;
    c1.innerHTML = document.getElementById("tasktype").value;
    c2.innerHTML = document.getElementById("duedate").value;
    
    var dDate = new Date(document.getElementById("duedate").value)

    c4.appendChild(button);
    
    const reDay = Math.round(Math.ceil((dDate.getTime() - currentDay.getTime()) / (oneDay)));

    c3.innerHTML = reDay;
   
    employeeID++;


    button.setAttribute('onclick','this.closest("tr").remove(), employeeID--');


}

