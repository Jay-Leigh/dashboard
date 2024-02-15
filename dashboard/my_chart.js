var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'YouTube', 'Amazon'],
        datasets: [{
            label: '# of Sales',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
            ],
           
        }]
    },
    options: {
        responsive: true,
    }
}) ;

var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Earnings',
            data: [1200, 1900, 3000, 4050, 5000, 6000, 9000, 7000, 3000, 3000, 1200, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
}) ;