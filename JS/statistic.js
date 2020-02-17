// let members = data.results[0].members
const statistics = {
  loyalVotLeast: [],
  loyalVotMost: [],
  numDomcraties: 0,
  numRepublics: 0,
  numIndependent: 0,
  totalNum: 0,
  percentDomcrat: 0,
  percentRepublic: 0,
  percentIndependents: 0,
  totalPercent: 0,
  leastEngaged: [],
  mostEngaged: []
};
let memberLeast = [];
let memberMost = [];
let numD = [];
let numR = [];
let numInd = [];
let memberParty = [];
let perDomArra = [];
let perRepArra = [];
let perIndArra = [];
let listPer = [];
let lestEngArr = [];
let mostEngArr = [];
let avg = 0;

console.log(document.title);

/////////////glance calculate start here

function staticCalculate(members) {
  // let members = data.results[0].members

  for (var i = 0; i < members.length; i++) {
    memberParty.push(members[i].party);
    statistics.totalNum = memberParty.length;
  }
  for (var i = 0; i < memberParty.length; i++) {
    if (memberParty[i] === "D") {
      numD.push(memberParty[i]);
      statistics.numDomcraties = numD.length;
    } else if (memberParty[i] === "R") {
      numR.push(memberParty[i]);
      statistics.numRepublics = numR.length;
    } else if (memberParty[i] === "I") {
      numInd.push(memberParty[i]);
      statistics.numIndependent = numInd.length;
    }
  }
  for (var i = 0; i < members.length; i++) {
    if (members[i].party === "D") {
      perDomArra.push(members[i].votes_with_party_pct);
      statistics.percentDomcrat = avgPercent(perDomArra);
    } else if (members[i].party === "R") {
      perRepArra.push(members[i].votes_with_party_pct);
      statistics.percentRepublic = avgPercent(perRepArra);
    } else if (members[i].party === "I") {
      perIndArra.push(members[i].votes_with_party_pct);
      statistics.percentIndependents = avgPercent(perIndArra);
    }
  }
  listPer.push(statistics.percentDomcrat);
  listPer.push(statistics.percentRepublic);
  listPer.push(statistics.percentIndependents);
  statistics.totalPercent = avgPercent(listPer);
}

function avgPercent(v1) {
  let sum = 0;
  // let avg = null
  for (var i = 0; i < v1.length; i++) {
    if (v1[i] != null) {
      sum = sum + v1[i];
    }
  }
  let avg = sum / v1.length;
  return Number(avg.toFixed(2));
}
// avgPercent(perDomArra)
// avgPercent(perRepArra)
// avgPercent(perIndArra)
// avgPercent(listPer)
/// /////////////////end glance calculate

//////////////////////////least  && most engaged calculate
function engaged() {
  lestEngArr = members.sort(function(a, b) {
    return b.missed_votes_pct - a.missed_votes_pct;
  });

  let tenPct = Math.round(lestEngArr.length * 0.1);

  for (var i = 0; i < tenPct; i++) {
    statistics.leastEngaged.push(lestEngArr[i]);
  }

  console.log(statistics.leastEngaged);

  mostEngArr = members.sort(function(a, b) {
    return a.missed_votes_pct - b.missed_votes_pct;
  });

  for (var i = 0; i < tenPct; i++) {
    statistics.mostEngaged.push(mostEngArr[i]);
  }
  console.log(statistics.mostEngaged);
}

/////////////////////statistic attendanece pages
////////start least Engaged table
function createTableAttendence(array, target) {
  let tbody = document.getElementById(target);
  console.log(array);
  for (i = 0; i < array.length; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var a = document.createElement("a");

    a.innerHTML = array[i].first_name + " " + array[i].last_name;
    a.href = array[i].url;

    td1.appendChild(a);
    tr.appendChild(td1);
    td2.innerHTML = array[i].missed_votes;
    tr.appendChild(td2);
    td3.innerHTML = array[i].missed_votes_pct;
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }
}

////////////end with least  && most engaged for senate && house

/////////////start loyalty senate  house page
function loyaltyLeastMostParty() {
  memberLeast = members.sort(function(a, b) {
    return a.votes_against_party_pct - b.votes_against_party_pct;
  });
  let tenPct = Math.round(memberLeast.length * 0.1);
  for (var i = 0; i < tenPct; i++) {
    statistics.loyalVotLeast.push(memberLeast[i]);
  }

  memberMost = members.sort(function(a, b) {
    return b.votes_against_party_pct - a.votes_against_party_pct;
  });
  for (var i = 0; i < tenPct; i++) {
    statistics.loyalVotMost.push(memberMost[i]);
  }
}

function createTableLoy(array, targrt) {
  let tbody = document.getElementById(targrt);

  for (i = 0; i < array.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let a = document.createElement("a");
    a.innerHTML = array[i].first_name + " " + array[i].last_name;
    a.href = array[i].url;

    td1.appendChild(a);
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerHTML = array[i].total_votes;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    if (array[i].votes_against_party_pct === null) {
      td3.innerHTML = 0;
    } else {
      td3.innerHTML = array[i].votes_against_party_pct;
    }

    tr.appendChild(td3);
    tbody.appendChild(tr);
  }
}

///////////glance start table
function createAtAGlanceTable(statistics) {
  var tbody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  td.innerHTML = "Democrates";
  tr.appendChild(td);
  td1.innerHTML = statistics.numDomcraties;
  tr.appendChild(td1);
  td2.innerHTML = statistics.percentDomcrat;
  tr.appendChild(td2);

  var tr2 = document.createElement("tr");
  var tdR = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  tdR.innerHTML = "Republics";
  tr2.appendChild(tdR);
  td3.innerHTML = statistics.numRepublics;
  tr2.appendChild(td3);
  td4.innerHTML = statistics.percentRepublic;
  tr2.appendChild(td4);

  var tr3 = document.createElement("tr");
  var tdI = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  tdI.innerHTML = "Independents";
  tr3.appendChild(tdI);
  td5.innerHTML = statistics.numIndependent;
  tr3.appendChild(td5);
  td6.innerHTML = statistics.percentIndependents;
  tr3.appendChild(td6);
  var tr4 = document.createElement("tr");
  var tdT = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  tdT.innerHTML = "Total";
  tr4.appendChild(tdT);
  td7.innerHTML = statistics.totalNum;
  tr4.appendChild(td7);
  td8.innerHTML = statistics.totalPercent;
  tr4.appendChild(td8);
  tbody.appendChild(tr);
  tbody.appendChild(tr2);
  tbody.appendChild(tr3);
  tbody.appendChild(tr4);
}

////////////////////for data page
function createTable(members) {
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  members.forEach(function(member) {
    // creates a table row
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var a = document.createElement("a");

    a.innerHTML = member.first_name + " " + member.last_name;
    a.href = member.url;
    td1.appendChild(a);
    td2.innerHTML = member.party;
    td3.innerHTML = member.state;
    td4.innerHTML = member.seniority;
    td5.innerHTML = "% " + member.votes_with_party_pct;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    tbody.appendChild(row);
  });
}
/////////////event lestener for drop option and members party
function eventListener() {
  document.getElementById("D").addEventListener("click", function() {
    filter();
    //createTable()
  });
  document.getElementById("R").addEventListener("click", function() {
    //createTable()
    filter();
  });
  document.getElementById("I").addEventListener("click", function() {
    // createTable()
    filter();
  });
  var select = document.getElementById("dropDownBody");
  select.addEventListener("change", function() {
    filter();
  });
}

function filter() {
  var checkedBoxes = [];
  var filteredMembers = [];

  // var dropOption = document.getElementById("stateSelect").value
  if (document.getElementById("D").checked) {
    checkedBoxes.push("D");
  }
  if (document.getElementById("R").checked) {
    checkedBoxes.push("R");
  }
  if (document.getElementById("I").checked) {
    checkedBoxes.push("I");
  }
  console.log(checkedBoxes);
  var select = document.getElementById("dropDownBody").value;
  console.log(select);

  for (var i = 0; i < members.length; i++) {
    if (checkedBoxes.length === 0 && select === members[i].state) {
      filteredMembers.push(members[i]);
    } else if (
      checkedBoxes.includes(members[i].party) &&
      select === members[i].state
    ) {
      filteredMembers.push(members[i]);
    } else if (checkedBoxes.length === 0 && select === "All") {
      filteredMembers.push(members[i]);
    } else if (checkedBoxes.includes(members[i].party) && select === "All") {
      filteredMembers.push(members[i]);
    }
  }
  createTable(filteredMembers);
}
/////////////
///////for state option
function createDropDown() {
  var filteredState = [];
  for (var i = 0; i < members.length; i++) {
    if (filteredState.indexOf(members[i].state) === -1) {
      filteredState.push(members[i].state);
      filteredState.sort();
    }
  }
  var select = document.getElementById("dropDownBody");
  for (var i = 0; i < filteredState.length; i++) {
    var option = document.createElement("option");
    option.innerHTML = filteredState[i];
    option.value = filteredState[i];
    select.appendChild(option);
  }
}
//////////////function to read more less
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myDisplay() {
  var display = document.getElementById("display");
  var para1 = document.getElementById("para1");
  var para2 = document.getElementById("para2");

  display.addEventListener("click", function() {
    para1.classList.toggle("onplay");
    para1.classList.remove("d-none");
    para2.classList.toggle("onplay");
  });
}
