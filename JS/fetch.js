var house = 'https://api.propublica.org/congress/v1/113/house/members.json'
var senate = 'https://api.propublica.org/congress/v1/113/senate/members.json'
if (document.title.includes('Senate')) {
    console.log("use senate")
    fetchMyData(senate)
} else {
    console.log("use house")
    fetchMyData(house)
}
var members = []

function fetchMyData(url) {
    fetch(url, {
            method: 'GET',
            headers: {
                "X-API-Key": "vyy29GnyLixBuKTUCS0Z1hjYmkHqru2yen7yAhi7"
            }
        })
        .then((response) => {
            console.log(response)

            return response.json();
        })
        .then((myJson) => {
            console.log(myJson)
            members = myJson.results[0].members
            if (document.title.includes('Data')) {
                createTable(members)
                eventListener()

                createDropDown()

            } else if (document.title.includes("Attendance")) {

                staticCalculate(members)
                createAtAGlanceTable(statistics)
                engaged()
                createTableAttendence(statistics.leastEngaged, "tbody2")
                createTableAttendence(statistics.mostEngaged, "tbody3")
            } else if (document.title.includes("Loyalty")) {
                staticCalculate(members)
                createAtAGlanceTable(statistics)
                loyaltyLeastNotParty()
                createTableLoy(statistics.loyalVotLeast, "tbody4")
                createTableLoy(statistics.loyalVotMost, "tbody5")
            } else if (document.title === "TGIF" || document.title.includes("Attendance")) {
                myFunction()
                myDisplay()
            }

        }).catch((error) => {
            console.error('Error:', error);
        })
}