
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
  
  
  td1.innerHTML = member.first_name
  td2.innerHTML=member.middle_name
  td3.innerHTML=member.last_name
  td4.innerHTML=member.party
  td5.innerHTML=member.total_votes

 
  row.appendChild(td1)
  row.appendChild(td2)
  row.appendChild(td3)
  row.appendChild(td4)
  row.appendChild(td5)

  tbody.appendChild(row)
    
 })

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
var display=document.getElementById("display")
var para1=document.getElementById("para1")
var para2=document.querySelector("#para2")

display.addEventListener("click",function(){
  para1.classList.toggle("onplay")
  para1.classList.remove("d-none")

 
})

