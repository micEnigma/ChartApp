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

        case 'histogram':
            //histogram(parseInt(prompt('height value')));
            //histogram(['a','b','c','d','e','f'],[120,40,60,80,100,50]);
            break;

        case 'barchart':
            //barChart(parseInt(prompt('height value')));
            //barChart(['a','b','c','d','e','f'],[110,40,60,80,100,50]);
            break;

        case 'linechart':
            //lineChart(parseInt(prompt('height value')));
            //lineChart(['a','b','c','d','e','f'],[110,40,60,80,100,50]);
            break;

        //case 'expiechart':
            //pieChart(parseInt(prompt('value')));
          //  exPieChart([ Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4, 2*Math.PI]);
            //break;

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

        //appCtx.strokeStyle = 'rgba(0,128,0,1)';

        appCtx.strokeStyle = 'rgba(' + 50*i +',' + 40*i + ',' + 0 + ',1)';
        appCtx.fillStyle = 'rgba(' + 50*i +',' + 40*i + ',' + 0 + ',1)';

        appCtx.beginPath();
        appCtx.arc(150, 75, 60, pieStart, pieEnd);
        appCtx.lineTo(150,75);
        appCtx.fill();
    };
}

//Histogram

function histogram(arr1, arr2){
    for(i=0; i<arr2.length; i++){
        appCtx.beginPath();

        //appCtx.fillStyle ="cyan";

        appCtx.strokeRect(45+40*i,120-arr2[i],40,arr2[i]);
        appCtx.font = "7px arial";
        appCtx.fillText(arr1[i], 45+40*i,130);
    };
}

//Bar Chart

function barChart(arr1, arr2){
    for(i=0; i<arr2.length; i++){
        appCtx.beginPath();

        //appCtx.fillStyle ="cyan";

        appCtx.fillRect(45+40*i,120-arr2[i],30,arr2[i]);
        appCtx.font = "7px arial";
        appCtx.fillText(arr1[i], 45+40*i,130);
    };
}

//Line Chart

function lineChart(arr1, arr2){
    appCtx.beginPath();
    appCtx.moveTo(45,120-arr2[0]);
    for(i=0; i<arr2.length; i++){        
        appCtx.lineTo(45+40*i,120-arr2[i]);
        appCtx.stroke();

        //appCtx.fillStyle ="cyan";        

        appCtx.font = "7px arial";
        appCtx.fillText(arr1[i], 45+40*i,130);
        appCtx.fillText(arr1[i], 45+40*i,120-arr2[i]);
    };
}

//Exploded Pie Chart

function exPieChart(arr){
    let pieStart = 0;
    let pieEnd = 0;
    for(i=0; i<arr.length; i++){
        pieStart = pieEnd;
        pieEnd += arr[i];

       // appCtx.strokeStyle = rgba(10+40*i,255-40*i,0,1);

        appCtx.beginPath();
        appCtx.lineTo(150,75);
        appCtx.arc(150, 75, 60, pieStart, pieEnd);
        appCtx.lineTo(150,75);
        appCtx.stroke();
    };
    appCtx.beginPath();
    appCtx.lineTo(180,75);
    appCtx.arc(180, 75, 60, 0, 2*Math.PI/15);
    appCtx.lineTo(180,75);
    appCtx.stroke();
}



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