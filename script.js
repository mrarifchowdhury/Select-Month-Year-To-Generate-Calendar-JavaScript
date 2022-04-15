const weekendDayName = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thus", "Fri"];

const years = ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047","2048","2049","2050"];

let selectedYear = document.querySelector('#selectYear');

let generateYearsOptions = years.map((year, i) => {
    let option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    return option;
});

selectedYear.append(...generateYearsOptions);

selectedYear.onchange = function(){

    outputYear = this.value;
    selectedMonth.disabled = false;
    document.querySelector('#viewYear').textContent = outputYear; 
    //if year is selected again or changed again from dropdown
    changeEverythingOnAnotherYearSelect();
}




// Getting First Weekend Day Of Any Month
function getFirstWeekDayOfMonth(month,year){
return gFWDOM = new Date(year + "-" + month + "-01").getDay();
}


function insertMonthsAllDateInTableTd(month,year,gFWDOM){
  //Adjusting Month's First Week Day To First Date Of Month
    if(gFWDOM == 6) {
      var gFWDOM = (gFWDOM-6);
    }
    else{
      var gFWDOM = (gFWDOM+1);
    }

    // Inserting Month's All Dates in Table Td Element.
    for(i=1;i<=getDaysInMonth(month, year);i++){
      var idOfTd = "td"+(i+gFWDOM);
      document.getElementById(idOfTd).innerHTML = i;
    }
}

function resetMonthsAllDateInTableTd(){
      // Resetting Month's All Dates in Table Td Element.
    for(i=1;i<=35;i++){
      var idOfTd = "td"+(i);
      document.getElementById(idOfTd).innerHTML = " ";
    }

}


const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let selectedMonth = document.querySelector('#selectMonth');

let generateMonthOptions = months.map((month, i) => {
    let option = document.createElement('option');
    option.value = i+1;
    option.textContent = month;
    return option;
});

selectedMonth.append(...generateMonthOptions);

// Getting Total Days Of Any Month
var getDaysInMonth = function(month,year) {
return new Date(year, month, 0).getDate();
};

selectedMonth.onchange = function(){
var options = this.getElementsByTagName("option");
var monthsName = options[this.selectedIndex].innerHTML;  
document.querySelector('#viewMonth').textContent = monthsName ;
outputMonth = this.value;
document.getElementById("viewDays").innerHTML = getDaysInMonth(outputMonth, outputYear);

document.getElementById("startWeekDay").innerHTML = weekendDayName[getFirstWeekDayOfMonth(outputMonth,outputYear)];

resetMonthsAllDateInTableTd();

insertMonthsAllDateInTableTd(outputMonth,outputYear,gFWDOM);
};


function changeEverythingOnAnotherYearSelect(){

document.getElementById("startWeekDay").innerHTML = getFirstWeekDayOfMonth(outputMonth,outputYear);

resetMonthsAllDateInTableTd();

insertMonthsAllDateInTableTd(outputMonth,outputYear,gFWDOM);
}





var row = new Array();

//Generating 5 Array
for(i=0;i<5;i++)
{ 
  row[i] = new Array();
    
    //Generating 7 Elements for Each Array 
    for(var j = (i * 7) + 1; j <= 7 * i + 7; j++){
        if (row[i] == null)
            row[i] = j;
        else
            row[i].push(j);
    }
}


let text = "<table class='table table-bordered'> ";
text += "<thead> <tr>";
weekendDayName.forEach(weekDayName);
text += "</tr> </thead><tbody>";

// Generating 5 Rows or 5 Tr of Table
for(i=0;i<5;i++)
{
  text += "<tr>";
  row[i].forEach(generateTd);
  text += "</tr>";
}

text += "</tbody></table>";


document.getElementById("viewTable").innerHTML = text;


function weekDayName(value,i) {
  text += "<th>" + value + "</th>";
} 

function generateTd(value) {
  //Generate id & Assign Blank Value for Every Tr of Table & 
  text += "<td id='td"+value+"'>" + ""  + "</td>";
} 
// Getting Total Days Of Any Month
var getDaysInMonth = function(month,year) {
return new Date(year, month, 0).getDate();
};