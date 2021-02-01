let ufo = [20, 30, 50, 15, 10, 5];
let meteors = [100, 200, 250, 100, 50];
const xaxis = ["Jan", "Feb", "Mar", "Apr", "May", "June"];


createChart('line', 'ufo-sightings', ufo, xaxis, '#ufo-chart')
createChart('bar', 'meteor-sightings', meteors, xaxis, '#meteors-chart')