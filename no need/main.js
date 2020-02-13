// function createTable(members) {

//   var tbody = document.getElementById("tbody")
//   tbody.innerHTML = ""
//   members.forEach(function (member) {
//     // creates a table row
//     var row = document.createElement("tr");
//     var td1 = document.createElement("td");
//     var td2 = document.createElement("td");
//     var td3 = document.createElement("td");
//     var td4 = document.createElement("td");
//     var td5 = document.createElement("td");
//     var a = document.createElement("a")

//     a.innerHTML = member.first_name + " " + member.last_name
//     a.href = member.url
//     td1.appendChild(a)
//     td2.innerHTML = member.party
//     td3.innerHTML = member.state
//     td4.innerHTML = member.seniority
//     td5.innerHTML = "% " + member.votes_with_party_pct


//     row.appendChild(td1)
//     row.appendChild(td2)
//     row.appendChild(td3)
//     row.appendChild(td4)
//     row.appendChild(td5)

//     tbody.appendChild(row)


//   })
// }



// function eventListener() {
//   document.getElementById("D").addEventListener("click", function () {
//     filter()
//     //createTable()

//   })
//   document.getElementById("R").addEventListener("click", function () {
//     //createTable()
//     filter()
//   })
//   document.getElementById("I").addEventListener("click", function () {
//     // createTable()
//     filter()
//   })
//   var select = document.getElementById("dropDownBody")
//   select.addEventListener("change", function () {
//     filter()
//   })

// }


// function filter() {
//   var checkedBoxes = []
//   var filteredMembers = []

//   // var dropOption = document.getElementById("stateSelect").value
//   if (document.getElementById("D").checked) {
//     checkedBoxes.push("D")
//   }
//   if (document.getElementById("R").checked) {
//     checkedBoxes.push("R")
//   }
//   if (document.getElementById("I").checked) {
//     checkedBoxes.push("I")
//   }
//   console.log(checkedBoxes)
//   var select = document.getElementById("dropDownBody").value
//   console.log(select)

//   for (var i = 0; i < members.length; i++) {
//     if (checkedBoxes.length === 0 && select === members[i].state) {
//       filteredMembers.push(members[i])

//     } else if (checkedBoxes.includes(members[i].party) && select === members[i].state) {
//       filteredMembers.push(members[i])

//     } else if (checkedBoxes.length === 0 && select === "All") {
//       filteredMembers.push(members[i])


//     } else if (checkedBoxes.includes(members[i].party) && select === "All") {
//       filteredMembers.push(members[i])

//     }

//   }
//   createTable(filteredMembers)
// }


// ////////for state option 
// function createDropDown() {
//   var filteredState = []
//   for (var i = 0; i < members.length; i++) {
//     if (filteredState.indexOf(members[i].state) === -1) {
//       filteredState.push(members[i].state)
//       filteredState.sort()

//     }
//   }
//   var select = document.getElementById("dropDownBody")
//   for (var i = 0; i < filteredState.length; i++) {
//     var option = document.createElement("option")
//     option.innerHTML = filteredState[i]
//     option.value = filteredState[i]
//     select.appendChild(option)

//   }
// }

////for read more and less button/////
// if (document.title === "TGIF" || document.title.includes("Attendance")) {
//   myFunction()
//   myDisplay()
// }

// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }


// function myDisplay() {
//   var display = document.getElementById("display")
//   var para1 = document.getElementById("para1")
//   var para2 = document.getElementById("para2")

//   display.addEventListener("click", function () {
//     para1.classList.toggle("onplay")
//     para1.classList.remove("d-none")
//     para2.classList.toggle("onplay")


//   })
// }