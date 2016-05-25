// Declare global variables for canvas and context

let canvas = 0;  
let appCtx = 0;

// Check that the browser is compatible with Html5 Canvas

function checkCompatibility(){
    canvas = document.getElementById('board');    
    if (canvas.getContext){
        appCtx = canvas.getContext('2d');
        draw('piechart');
    }
    else {

    }
}

//Draw cases

function draw(chartType){
    switch(chartType){
        case 'piechart':
            //pieChart(parseInt(prompt('value')));
            pieChart([ 0.41887902047863906, 0.8377580409572781, 1.2566370614359172, 1.6755160819145563, 2.0943951023931953 ]);
            break;

        case 'barchart':
            barChart(parseInt(prompt('height value')));
            break;

        case 'histogram':
            histogram(parseInt(prompt('height value')));
            break;

        case 'linechart':
            linechart(parseInt(prompt('height value')));
            break;

        default:
            alert('Input not understood, please try again');
            //draw();
    }    
}

//Chart functions

//Pie Chart

function pieChart(arr){
    let pieStart = 0;
    let pieEnd = 0;
    for(i=0; i<arr.length; i++){
        pieStart = pieEnd;
        pieEnd += arr[i];

       // appCtx.strokeStyle = rgba(10+40*i,255-40*i,0,1);

        appCtx.beginPath();
        appCtx.arc(150, 75, 60, pieStart, pieEnd);
        appCtx.lineTo(150,75);
        appCtx.stroke();
    };
}

//Bar Chart

function barChart(height){
    appCtx.beginPath();

    //appCtx.fillStyle ="cyan";

    appCtx.fillRect(45,120-height,25,height);  

}


context.fillStyle ="cyan";






// Input


var a = [1,2,3,4,5];


function addValues(arr1,arr2){
    return arr1+arr2;
} 

var valueTotal= a.reduce(addValues)

function valueAngle(arr){
    return 2*Math.PI*arr/valueTotal;
}


var b= a.map(valueAngle);