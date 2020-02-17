var app = new Vue({
    el: "#app",
    data: function () {
        return {
            members: [],
            isLoading: true
        }
    },
    methods: {
        fetchMyData: function () {
            fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
                    method: 'GET',
                    headers: {
                        "X-API-Key": "vyy29GnyLixBuKTUCS0Z1hjYmkHqru2yen7yAhi7"
                    }
                })
                .then((response) => {
                    console.log(response)

                    return response.json();
                }).then(data => {
                    console.log(data)
                    this.isLoading = false
                    this.members = data.results[0].members
                })
        },
        testFunction: function () {
            fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
                    method: 'GET',
                    headers: {
                        "X-API-Key": "vyy29GnyLixBuKTUCS0Z1hjYmkHqru2yen7yAhi7"
                    }
                })
                .then((response) => {
                    console.log(response)

                    return response.json();
                }).then(data => {
                    console.log(data)
                    // this.isLoading = false
                    this.members = data.results[0].members
                    // return this.members.split('').reverse().join('')
                })
        }
    },
    created() {
        this.fetchMyData()
        this.testFunction()
    }
})