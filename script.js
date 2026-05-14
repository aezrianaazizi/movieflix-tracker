function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainSite").style.display = "block";

    } else {

        document.getElementById("error").innerHTML = "Invalid username or password";
    }
}

function logout() {

    document.getElementById("mainSite").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
}


// CHART
const ctx = document.getElementById('movieChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Action', 'Sci-Fi', 'Horror', 'Comedy', 'Fantasy'],
        datasets: [{
            label: 'Movies by Genre',
            data: [10, 8, 5, 6, 4],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});