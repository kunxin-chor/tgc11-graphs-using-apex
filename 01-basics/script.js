let data = [10, 11, 15, 80, 17, 121];

// let's define the chart options
const options = {
    'chart': {
        'type': 'line',
        'height': '100%'
    },
    // one series is one set of data
    'series': [
        {
            'name': 'ufo-sightings',
            // data below will be the y axis
            'data': data
        },
        {
            'name': 'meteors-sighting',
            'data':[20, 10, 11, 33, 24, 55]
        }
    ],
    'xaxis': {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    'colors':['#5C573E', '#A5B452', '#C8D96F', '#C8D96F', '#9BA7C0']
}

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render()