function createChart(chartType, chartName, chartData, categories, element) {
  let option = {
    chart: {
      type: chartType,
      height: "100%"
    },
    series: [
      {
        name: chartName,
        data: chartData
      }
    ],
    xaxis: {
      categories: categories
    }
  };

  // create the chart object using the chart options
  const chart = new ApexCharts(document.querySelector(element), option);
  chart.render();
}
