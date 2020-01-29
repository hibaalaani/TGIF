
 var  members = data.results[0].members
var tbody = document.getElementById("tbody")

 members.forEach(function (member){
  // creates a table row
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var td6=document.createElement("td")
  var td7=document.createElement("td")


  td1.innerHTML = member.first_name
  td2.innerHTML=member.last_name
  td3.innerHTML=member.middle_name
  td4.innerHTML=member.senate_class
  td5.innerHTML=member.state
  td6.innerHTML=member.party
  td7.innerHTML=member.date_of_birth
  
  row.appendChild(td1)
  row.appendChild(td2)
  row.appendChild(td3)
  row.appendChild(td4)
row.appendChild(td5)
row.appendChild(td6)
row.appendChild(td7)
  tbody.appendChild(row)
    
 })
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementsByClassName("btn btn-primary");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }
// }
//  )
// function generate_table() {
//   // get the reference for the body
//   var body = document.getElementsByTagName("body")[0];

//   // creates a <table> element and a <tbody> element
//   var tbl = document.createElement("table");
//   var tblBody = document.createElement("tbody");

//   // creating all cells
//   for (var i = 0; i < 2.length; i++) {
//     // creates a table row
//     var row = document.createElement("tr");

//     for (var j = 0; j < 2; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode("cell in row "+i+", column "+j);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }

//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }

//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "2");
// }