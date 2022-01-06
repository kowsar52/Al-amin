$('.dropdown_menu').on('click', function(){
    console.log($(this).next());
    $(this).next().slideToggle('fast')
    $(this).find('.arrow').toggleClass('rotate')
})
$('.profile').on('click', function(){
    $('.user_menu').fadeToggle('fast')
})
$('.bar_icon').on('click', function(){
    $('.left_section').toggleClass('hide_sidebar')
    $('.main_section').toggleClass('expand')
})
// $('.bar_icon').on('click', function(){
//     $('body').toggleClass('hide_sidebar')
// })
// script for chart ------------------------------------------------
var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'APAC RE Index',
            backgroundColor:'red',
            borderColor: 'red',
            fill: false,
            data: [
                10,
                20,
                30,
                40,
                100,
                50,
                150
                /*randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()*/
            ],
        }, {
            label: 'APAC PME',
            backgroundColor:'blue',
            borderColor: 'blue',
            fill: false,
            data: [
                50,
                300,
                100,
                450,
                150,
                200,
                300
            ],
    
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart - Logarithmic'
        },
        scales: {
            xAxes: [{
                display: true,
      scaleLabel: {
        display: true,
        labelString: 'Date'
      },
        
            }],
            yAxes: [{
                display: true,
                //type: 'logarithmic',
      scaleLabel: {
                        display: true,
                        labelString: 'Index Returns'
                    },
                    ticks: {
                        min: 0,
                        max: 500,

                        // forces step size to be 5 units
                        stepSize: 100
                    }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};



const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var oilCanvas = document.getElementById("oilChart");


var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
        "Iraq",
        "United Arab Emirates",
        "Canada"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});







