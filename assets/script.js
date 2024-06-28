var ctx = document.getElementById("myDonutChart").getContext("2d");

var data = {
  labels: ["Liquidity", "Presale", "Treasury for development", "Team"],
  datasets: [
    {
      data: [50, 20, 20, 10],
      backgroundColor: ["#FE2B22", "#826E09", "#00A3DA", "#00B13D"],
      borderColor: ["#FE2B22", "#826E09", "#00A3DA", "#00B13D"],
      borderWidth: 1,
    },
  ],
};

// Configuration options
var options = {
  cutoutPercentage: 50,
  rotation: -Math.PI / 2, // Rotates the chart
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        fontColor: "Red",
      },
    },
    title: {
      display: false,
      text: "Donut Pie Chart",
    },
    datalabels: {
      color: "#fff",
      font: {
        family: "Pixel",
        size: 30,
      },
      formatter: (value, context) => {
        let sum = 0;
        let dataArr = context.chart.data.datasets[0].data;
        dataArr.map((data) => {
          sum += data;
        });
        let percentage = ((value * 100) / sum).toFixed(2);
        if (percentage.includes(".00")) {
          return percentage.replace(".00", "") + "%";
        } else {
          return percentage + "%";
        }
      },
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
};

Chart.register(ChartDataLabels);

var myDonutChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: options,
});



// goal daww
const goalFlag = document.querySelector("#roadmap .flag");
const goalContainer = document.querySelector(".goal-container");
const goalItems = goalContainer.querySelectorAll(".flex");

goalItems.forEach((el, key) => {
  el.addEventListener("click", () => {
    // remove default class to all el
    goalItems.forEach((s) => {
      s.classList.remove("default");
    });

    el.classList.add("default");

    if (key == 0) {
      goalFlag.classList.add("first");
      goalFlag.classList.remove("second");
    } else if (key == 1) {
      goalFlag.classList.remove("first");
      goalFlag.classList.add("second");
    } else {
      goalFlag.classList.remove("first");
      goalFlag.classList.remove("second");
    }
  });
});
