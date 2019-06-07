var lables = [
  "Crown Chakra",
  "Forehead Chakra",
  "Ajna Chakra",
  "Throat Chakra",
  "Heart Chakra (Front)",
  "Heart Chakra (Back)",
  "Solar Plex Charka (Front)",
  "Solar Plex Charka (Back)",
  "Spleen Chakra (Front)",
  "Spleen Chakra (Back)",
  "Meng Mein Chakra",
  "Sex Chakra",
  "Basic Chakra"
];

function OrganChart(data, id) {
  var ctx = document.getElementById(id).getContext("2d");
  var myChart = new Chart(ctx, {
    type: "radar",

    data: data,
    options: {
      responsive: true,
      legend: {
        display: false
      },

      scale: {
        ticks: {
          callback: function() {
            return "";
          },
          backdropColor: "rgba(0, 0, 0, 0)"
        }
      }
    }
  });
}
function LoadChart(data, labels) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "radar",

    data: {
      labels: labels,

      datasets: [
        {
          data: data,
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false
      }
    }
  });
}

function collectData(event) {
  var dataFromForm = [];
  $(":input").each(function() {
    if ($(this).val() != "") {
      dataFromForm.push($(this).val());
    }
  });
  LoadChart(dataFromForm, lables);
}

function LoadSizeChart(lableData, dataArray, chartId) {
  var sizeChart = document.getElementById(chartId).getContext("2d");
  var myChart = new Chart(sizeChart, {
    type: "radar",

    data: dataArray,
    options: {
      responsive: true,
      legend: {
        display: false
      },

      scale: {
        ticks: {
          callback: function() {
            return "";
          },
          backdropColor: "rgba(0, 0, 0, 0)"
        }
      }
    }
  });
}
window.randomScalingFactor = function() {
  return Math.round(Samples.utils.rand(-100, 100));
};
