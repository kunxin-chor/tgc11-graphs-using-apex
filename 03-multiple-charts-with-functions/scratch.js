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