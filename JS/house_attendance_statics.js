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
}
let numD = []
let numR = []
let numInd = []
let memberParty = []
let perDomArra = []
let perRepArra = []
let perIndArra = []
let listPer = []
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

    console.log(statistics)
    console.log(statistics.percentDomcrat)
    console.log(numR)
    console.log(perDomArra)


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
console.log(avgPercent(perDomArra))
avgPercent(perRepArra)
avgPercent(perIndArra)
avgPercent(listPer)

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



// const statistics = {
//     numDemocrat: 0,
//     numRepublic: 0,
//     numIndependent: 0,
//     republicPercent: 0,
//     democratsPercent: 0,
//     independentPercent: 0,
//     totoalPartyPercent: 0,
// }

// // const stat = [
// //     {
// //     party: "Dem",
// //     total: 0,
// //     percent :0
// // },
// //     {
// //     party: "Rep",
// //     total: 0,
// //     percent :0
// // },
// //     {
// //     party: "Ind",
// //     total: 0,
// //     percent :0
// // },
// //     {
// //     party: "Total",
// //     total: 0,
// //     percent :0
// // },
// // ]

// let numD = []
// let numR = []
// let numI = []
// let persentWithD = []
// let persentWithR = []
// let persentWithI = []
// let memberPercent = []
// let memberParty = []

// let avg = null

// function calculatStatic() {
//     let members = data.results[0].members
//     for (var i = 0; i < members.length; i++) {
//         memberParty.push(data.results[0].members[i].party)


//     }
//     console.log(memberParty)
//     for (var i = 0; i < members.length; i++) {
//         if (memberParty[i] === "D") {
//             numD.push(memberParty[i])
//             statistics.numDemocrat = numD.length
//         } else if (memberParty[i] === "R") {
//             numR.push(memberParty[i])
//             statistics.numRepublic = numR.length
//         } else if (memberParty[i] === "I") {
//             numI.push(memberParty[i])
//             statistics.numIndependent = numI.length
//         }
//     }




//     for (var i = 0; i < members.length; i++) {
//         // memberPercent.push(members[i].votes_with_party_pct)
//         if (members[i].party === "D") {
//             persentWithD.push(members[i].votes_with_party_pct)
//             statistics.democratsPercent = calculateAvg(persentWithD)
//         } else if (members[i].party === "R") {
//             persentWithR.push(members[i].votes_against_party_pct)
//             statistics.republicPercent = calculateAvg(persentWithR)
//         } else if (members[i].party === "I") {
//             persentWithI.push(members[i].votes_with_party_pct)
//             statistics.independentPercent = calculateAvg(persentWithI)
//         }

//     }

//     console.log(avg)
//     console.log(persentWithD)
//     console.log(persentWithR)
//     console.log(memberPercent)
//     calculateAvg(persentWithD)
//     calculateAvg(persentWithR)
//     calculateAvg(persentWithI)
//     calculateAvg(totalAvgPerc)

//     console.log(totalAvgPerc)
// }
// memberPercent.push(statistics.republicPercent)
// memberPercent.push(statistics.independentPercent)
// memberPercent.push(statistics.democratsPercent)
// let totalAvgPerc = memberPercent

// calculatStatic()

// function calculateAvg(v1) {
//     let sum = 0
//     let avg = null
//     for (var i = 0; i < v1.length; i++) {
//         if (v1[i] != null) {
//             sum = sum + v1[i]
//         }

//     }
//     avg = sum / v1.length

//     return Number(avg.toFixed(2))
// }

// var tbody = document.getElementById("tbody")

// var tr = document.createElement("tr")
// var td = document.createElement("td")
// var td1 = document.createElement("td")
// var tdDVotes = document.createElement("td")
// td.innerHTML = "Democrats"
// td1.innerHTML = statistics.numDemocrat
// tdDVotes.innerHTML = "% " + statistics.democratsPercent
// tr.appendChild(td)
// tr.appendChild(td1)
// tr.appendChild(tdDVotes)

// var tr2 = document.createElement("tr")
// var tdR = document.createElement("td")
// var td2 = document.createElement("td")
// var tdRVotes = document.createElement("td")
// tdR.innerHTML = "Republics"
// td2.innerHTML = statistics.numRepublic
// tdRVotes.innerHTML = "% " + statistics.republicPercent
// tr2.appendChild(tdR)
// tr2.appendChild(td2)
// tr2.appendChild(tdRVotes)

// var tr3 = document.createElement("tr")
// var td3 = document.createElement("td")
// var tdI = document.createElement("td")
// var tdIVotes = document.createElement("td")

// tdI.innerHTML = "Independents"
// td3.innerHTML = statistics.numIndependent
// tdIVotes.innerHTML = "% " + statistics.independentPercent
// tr3.appendChild(tdI)
// tr3.appendChild(td3)
// tr3.appendChild(tdIVotes)


// var tr4 = document.createElement("tr")
// var td4 = document.createElement("td")
// var td5 = document.createElement("td")
// var tdTVotes = document.createElement("td")
// td4.innerHTML = "total"
// td5.innerHTML = statistics.numDemocrat + statistics.numRepublic + statistics.numIndependent
// tdTVotes.innerHTML = statistics.totoalPartyPercent

// tr4.appendChild(td4)
// tr4.appendChild(td5)
// tr4.appendChild(tdTVotes)

// tbody.appendChild(tr)
// tbody.appendChild(tr2)
// tbody.appendChild(tr3)
// tbody.appendChild(tr4)