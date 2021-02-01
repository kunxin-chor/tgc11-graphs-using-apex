const mc = [3, 2, 0, 5, 3, 1];
const revenue = [200000, 250000, 300000, 150000, 400000, 650000];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June"];

// create the MC chart
const mcOptions = {
  chart: {
    id: "mcChart", // unique id for ApexCharts to identify this chart
    type: "line",
    height: "100%",
    group: "revenue-vs-mc"
  },
  series: [
    {
      name: "MC",
      data: mc
    }
  ],
  xaxis: {
    categories: months
  },
  yaxis: {
    labels: {
      minWidth: 40
    }
  }
};

const mcChart = new ApexCharts(document.querySelector("#mc-chart"), mcOptions);
mcChart.render();

// Create the revenue chart
const revenueOptions = {
  chart: {
    id: "revenueChart", // <-- uniquely identifies a graph
    group: "revenue-vs-mc", // <-- all graphs in the same group are synchronized
    type: "line",
    height: "100%"
  },
  series: [
    {
      name: "revenue",
      data: revenue
    }
  ],
  xaxis: {
    categories: months
  },
  yaxis: {  // <-- apexCharts need this for synchronized charts
    labels: {
      minWidth: 40
    }
  }
};
const revenueChart = new ApexCharts(
  document.querySelector("#revenue-chart"),
  revenueOptions
);
revenueChart.render();
