
function draw(){
    let canvas = document.getElementById('board');
    // First check that the browser is compatible with Html5 Canvas
    if (canvas.getContext){
        let appCtx = canvas.getContext('2d');
        appCtx.beginPath();
        appCtx.arc(60, 60, 60, 0, 2*Math.PI);
        appCtx.stroke();
    }
    else {

    }
}

