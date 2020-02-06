////members table 
var members;
var  members = data.results[0].members

function createTableHouse(){
  
  var tbody = document.getElementById("tbody")

  members.forEach(function (member){
   // creates a table row
   var row = document.createElement("tr");
   var td1 = document.createElement("td");
   var td2 = document.createElement("td");
   var td3=document.createElement("td");
   var td4=document.createElement("td");
   var td5=document.createElement("td");
   var a=document.createElement("a")
 
   a.innerHTML=member.first_name + " "+  member.last_name
   a.href=member.url
   td1.appendChild(a)
   td2.innerHTML=member.party
   td3.innerHTML=member.state
   td4.innerHTML=member.seniority
   td5.innerHTML= "% "+ member.votes_with_party_pct
 

    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    row.appendChild(td4)
    row.appendChild(td5)
  
    tbody.appendChild(row)
      

  } )
}createTableHouse()

 
 ////////CHECK BOX FUN
// document.querySelectorAll("input[name=Party]")[0].addEventListener("click", createTableHouse);
// document.querySelectorAll("input[name=Party]")[1].addEventListener("click", createTableHouse);
// document.querySelectorAll("input[name=Party]")[2].addEventListener("click", createTableHouse);

// function showMember(member){
  //  var  member = data.results[0].members
//     var options=document.getElementById("dropDownBody").value
//     var checkBoxes =document.querySelectorAll("input[name=party]")
//     var ckeckedBoxes=document.querySelectorAll("input[name=party]:checked")
//     if(ckeckedBoxes.length== 0 && options=="All"){
//   return true
// }
// for(var j=0 ;j<checkBoxes.length;j++){
//   if(checkBoxes[j].checked && (member.party==checkBoxes[j].value)&&((options===member.state||options==="All"))){
//     return true
//   }else if(checkedBoxes.lenght===0&&options===member.state){
//     return true
//   }
// }
// return false
//  }
// showMember()

// //DROPDOWN BUTTON TO CHOSE STATE

// function showDropDownOption(){
//   var  member = data.results[0].members
//   var options=document.getElementById("dropDownBody").value
//   if(options===member.state||options==="All"){
//     return true
//   }
// }
// document.getElementById("dropDownBody").addEventListener("change",createTableHouse)

// function createStates(){
//   var  member = data.results[0].members
//   var whichState=[]
//   for (var i=0;i<member.length;i++){
//     if(whichState.indexOf(member[i].state==-1)){
//       whichState.push(member[i].state)
//       whichState.sort()
//     }
//   }
//   for(var j=0;j<whichState.length;j++){
//     var option=document.createElement("option")
//     option.classList.add("stateOption")
//     option.setAttribute("value",whichState[j])
//     option.innerHTML=whichState[j]
//     var dropDownOption=document.getElementById("dropDownBody")
//     dropDownOption.appendChild(option)
//   }
// }createStates()

////for read more and less button/////

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
function myDisplay(){
var display=document.getElementById("display")
var para1=document.getElementById("para1")
var para2=document.getElementById("para2")

  display.addEventListener("click",function (){
  para1.classList.toggle("onplay")
  para1.classList.remove("d-none")
  para2.classList.toggle("onplay")

 
})
}

