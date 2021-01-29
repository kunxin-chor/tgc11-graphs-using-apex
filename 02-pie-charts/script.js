const options = {
    'chart': {
        'type':'pie',
        'height':'100%'
    },

    'series':[20, 15, 40, 25],
    'labels':['English', 'Mother Tongue', 'PE', 'Science'],
    'colors':['#A7CECB', '#8BA6A9']
}

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();