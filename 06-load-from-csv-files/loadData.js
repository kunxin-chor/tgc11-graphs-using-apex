async function loadData() {
    let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/crude-birth-rate.csv');
    let series = response.data;
    // the csv() is provided by csvtojson library
    let json = await csv().fromString(series);
    return transformData(json);
}

function transformData(json) {
    let transformed = [];
    for (let datnum of json) {
        if (parseInt(datnum.year) > 1980) {
              transformed.push({
            'x': datnum.year,
            'y': parseFloat(datnum.value)
        })
        }
      
    }
    return transformed;
}