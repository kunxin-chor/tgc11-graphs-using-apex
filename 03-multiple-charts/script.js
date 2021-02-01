let ufo = [20, 30, 50, 15, 10, 5];
let meteors = [100, 200, 250, 100, 50];
const xaxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

let ufoOption = {
    chart: {
        'type': 'line',
        'height': '100%'
    },
    series:[
        {
            'name':'ufo-sightings',
            'data': ufo
        }
    ],
    xaxis: {
        categories: xaxis
    }
}

// create the chart object using the chart options
const ufoChart = new ApexCharts(document.querySelector('#ufo-chart'), ufoOption);
ufoChart.render();

let meteorOption = {
    chart: {
        'type': 'bar',
        'height': '100%'
    },
    series: [
        {
            'name': 'meteors-sightings',
            'data': meteors
        }
    ],
    xaxis: {
        categories: xaxis
    }
}

const meteorChart = new ApexCharts(document.querySelector('#meteors-chart'), meteorOption);
meteorChart.render();