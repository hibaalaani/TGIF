var  members = data.results[0].members
var tbody = document.getElementById("tbody")

 members.forEach(function (member){
  // creates a table row
  var row = document.createElement("tr")
 
  var td1 = document.createElement("td")
  var td2 = document.createElement("td")
  var td3=document.createElement("td")
  
  td1.innerHTML = member.party
  td2.innerHTML=member.seniority
  td3.innerHTML=member.votes_with_party_pct

 
  row.appendChild(td1)
  row.appendChild(td2)
  row.appendChild(td3)
  tbody.appendChild(row)
    
 })
 var  members = data.results[0].members;
members.forEach(function(member){
    var tbody2=document.getElementById("tbody2");
    var td=document.createElement("td")
    var td2=document.createElement("td")
    var td3=document.createElement("td")
    var row=document.createElement("tr")
    var a=document.createElement("a")

td2.innerHTML=member.missed_votes 
td3.innerHTML=member.total_present
a.innerHTML=member.first_name
a.href=member.url

td.appendChild(a)
row.appendChild(td);
row.appendChild(td2)
row.appendChild(td3)
tbody2.appendChild(row)


})
