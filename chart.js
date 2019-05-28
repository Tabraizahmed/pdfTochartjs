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

$(document).ready(function() {
  var data = [3, 3, 3, 4, 5, 6, 7, 5, 2, 7, 3, 4];

  LoadChart(data, lables);
});

function LoadChart(data, labels) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "radar",
    responsive: true,
    data: {
      labels: labels,

      datasets: [
        {
          label: "# of Votes",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
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
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
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
