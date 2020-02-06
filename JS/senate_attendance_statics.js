let members = data.results[0].members
const statistics = {
    numDomcraties: 0,
    numRepublics: 0,
    numIndependent: 0,
    totalNum: 0,
    percentDomcrat: 0,
    percentRepublic: 0,
    percentIndependents: 0,
    totalPercent: 0,
    leastEngaged: [],
    mostEngaged: [],
    lestMemberEng: [],
    mostMemberEng: [],
    percentLestMissedEng: [],
    percentMostMissedEng: [],

}
let numD = []
let numR = []
let numInd = []
let memberParty = []
let perDomArra = []
let perRepArra = []
let perIndArra = []
let listPer = []
let lestEngArr = []
let mostEngArr = []
let memberLeast = []
let memberMost = []
let avg = 0


function staticCalculate() {
    let members = data.results[0].members

    for (var i = 0; i < members.length; i++) {
        memberParty.push(data.results[0].members[i].party)
        statistics.totalNum = memberParty.length
    }
    for (var i = 0; i < memberParty.length; i++) {
        if (memberParty[i] === "D") {
            numD.push(memberParty[i])
            statistics.numDomcraties = numD.length
        } else if (memberParty[i] === "R") {
            numR.push(memberParty[i])
            statistics.numRepublics = numR.length
        } else if (memberParty[i] === "I") {
            numInd.push(memberParty[i])
            statistics.numIndependent = numInd.length
        }
    }
    for (var i = 0; i < members.length; i++) {

        if (members[i].party === "D") {
            perDomArra.push(members[i].votes_with_party_pct)
            statistics.percentDomcrat = avgPercent(perDomArra)
        } else if (members[i].party === "R") {
            perRepArra.push(members[i].votes_with_party_pct)
            statistics.percentRepublic = avgPercent(perRepArra)
        } else if (members[i].party === "I") {
            perIndArra.push(members[i].votes_with_party_pct)
            statistics.percentIndependents = avgPercent(perIndArra)
        }
    }
    listPer.push(statistics.percentDomcrat)
    listPer.push(statistics.percentRepublic)
    listPer.push(statistics.percentIndependents)

}
staticCalculate()

function avgPercent(v1) {
    let sum = 0
    // let avg = null
    for (var i = 0; i < v1.length; i++) {
        if (v1[i] != null) {
            sum = sum + v1[i]
        }
    }
    let avg = sum / v1.length
    return Number(avg.toFixed(2))
}

avgPercent(perRepArra)
avgPercent(perIndArra)
avgPercent(listPer)



///////////////////////////least engaged calculate
function engaged() {

    lestEngArr = members.sort(function (a, b) {
        return b.missed_votes_pct - a.missed_votes_pct

    })

    let tenPct = Math.round(lestEngArr.length * 0.1)

    for (var i = 0; i < tenPct; i++) {
        statistics.leastEngaged.push(lestEngArr[i].missed_votes)
        statistics.lestMemberEng.push(lestEngArr[i].first_name + " " + lestEngArr[i].last_name)
        statistics.percentLestMissedEng.push(lestEngArr[i].missed_votes_pct)

    }
    console.log(statistics.percentLestMissedEng)
    console.log(statistics.lestMemberEng)
    console.log(statistics.leastEngaged)
    mostEngArr = members.sort(function (a, b) {
        return a.missed_votes_pct - b.missed_votes_pct
    })

    for (var i = 0; i < tenPct; i++) {
        statistics.mostEngaged.push(mostEngArr[i].missed_votes)
        statistics.mostMemberEng.push(mostEngArr[i].first_name + " " + mostEngArr[i].last_name)
        statistics.percentMostMissedEng.push(mostEngArr[i].missed_votes_pct)
    }
    console.log(statistics.mostEngaged)
    console.log(statistics.mostMemberEng)
}
engaged()


////////////end with least engaged for senate
var tbody = document.getElementById("tbody")
var tr = document.createElement("tr")
var td = document.createElement("td")
var td1 = document.createElement("td")
var td2 = document.createElement("td")
td.innerHTML = "Democrates"
tr.appendChild(td)
td1.innerHTML = statistics.numDomcraties
tr.appendChild(td1)
td2.innerHTML = statistics.percentDomcrat
tr.appendChild(td2)

var tr2 = document.createElement("tr")
var tdR = document.createElement("td")
var td3 = document.createElement("td")
var td4 = document.createElement("td")
tdR.innerHTML = "Republics"
tr2.appendChild(tdR)
td3.innerHTML = statistics.numRepublics
tr2.appendChild(td3)
td4.innerHTML = statistics.percentRepublic
tr2.appendChild(td4)

var tr3 = document.createElement("tr")
var tdI = document.createElement("td")
var td5 = document.createElement("td")
var td6 = document.createElement("td")
tdI.innerHTML = "Independents"
tr3.appendChild(tdI)
td5.innerHTML = statistics.numIndependent
tr3.appendChild(td5)
td6.innerHTML = statistics.percentIndependents
tr3.appendChild(td6)
tbody.appendChild(tr)
tbody.appendChild(tr2)
tbody.appendChild(tr3)

/////////start least Engaged table
var tbody2 = document.getElementById("tbody2")
for (i = 0; i < statistics.lestMemberEng.length; i++) {
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var a = document.createElement("a")

    a.innerHTML = statistics.lestMemberEng[i]
    a.href = statistics.lestMemberEng[i].url

    td1.appendChild(a)
    tr.appendChild(td1)
    td2.innerHTML = statistics.leastEngaged[i]
    tr.appendChild(td2)
    td3.innerHTML = "% " + statistics.percentLestMissedEng[i]
    tr.appendChild(td3)
    tbody2.appendChild(tr)
}
/////////////end table least Engaged
var tbody3 = document.getElementById("tbody3")
for (i = 0; i < statistics.mostMemberEng.length; i++) {
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var a = document.createElement("a")

    a.innerHTML = statistics.mostMemberEng[i]
    a.href = statistics.mostMemberEng[i].url

    td1.appendChild(a)
    tr.appendChild(td1)
    td2.innerHTML = statistics.mostEngaged[i]
    tr.appendChild(td2)
    td3.innerHTML = "% " + statistics.percentMostMissedEng[i]
    tr.appendChild(td3)
    tbody3.appendChild(tr)
}
/////////////start table most Engaged