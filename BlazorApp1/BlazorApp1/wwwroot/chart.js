var run = false;

window.setup = (id, config) => {
    var ctx = document.getElementById(id).getContext('2d');
    if (!run) {
        new Chart(ctx, config);

    }
    run = true;
    
}