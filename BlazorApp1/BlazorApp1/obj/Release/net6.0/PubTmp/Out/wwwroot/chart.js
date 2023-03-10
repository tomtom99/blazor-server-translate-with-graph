var run = false;

var chart;
window.setup = (id, config) => {
    var ctx = document.getElementById(id).getContext('2d');
    if (!run) {
        chart = new Chart(ctx, config);

    }
    run = true;
    
}

function addData(label, data, label2, data2) {
    // change this to take a json object.
    /*  {labels:["one","two"],
     *   data:[1,2]
     *   }
     */
    // clear data
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });
    // add data
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.data.labels.push(label2);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data2);
    });
    chart.update();
}
function updateChart() {
    chart.update();
}
function removeData() {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
function updateData(label, data) {
    //var chart = document.getElementById(chartID);
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}