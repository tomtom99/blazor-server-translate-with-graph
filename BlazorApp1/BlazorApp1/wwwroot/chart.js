var run = false;

var chart;
window.setup = (id, config) => {
    var ctx = document.getElementById(id).getContext('2d');
    if (!run) {
        chart = new Chart(ctx, config);

    }
    run = true;
    
}

function addData(chartID, label, data) {
    //var chart = document.getElementById(chartID);
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
