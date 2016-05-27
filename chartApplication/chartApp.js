// Declare global variables for canvas and context

let canvas = 0;  
let appCtx = 0;
let chartDiagram = '';
let chartLabels = [];
let chartValues = [];
let valueTotal =0;

// Check that the browser is compatible with Html5 Canvas

function checkCompatibility(){
    canvas = document.getElementById('board');    
    if (canvas.getContext){
        appCtx = canvas.getContext('2d');      
    }
    else {
      alert('Your current browser is not compatible with this application. Please try a different one.');
    }
}

// Accept user data input and display the last entry by user

function lastData() {
    let lastLabel= document.getElementById('fm1').elements[5].value;
    let lastValues= document.getElementById('fm1').elements[6].value;
    let lastEntered= 'Last data entered: ' +  'Label: ' + lastLabel + ', ' + 'Value: ' + lastValues;    
    document.getElementById('feedback').innerHTML = lastEntered;   
    chartLabels.push(lastLabel);
    chartValues.push(parseInt(lastValues));
    valueTotal += parseInt(lastValues)
}

// Accept user command to draw

function drawSelect(){
    let radios = document.getElementsByName('chart');
    for (i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {            
            confirm('You are about to draw a ' + radios[i].value);
            chartDiagram =  radios[i].value;           

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }    
    draw(chartDiagram);
    chartLabels = [];
    chartValues = [];
}

//Draw cases

function draw(chartType){
    switch(chartType){
        case 'Pie Chart': 
            function valueAngle(num){
                return 2*Math.PI*num/valueTotal;
            }
          
            pieChart(chartLabels, chartValues.map(valueAngle));
            break;

        case 'Histogram':     
            histogram(chartLabels,chartValues);
            break;

        case 'Bar Chart':            
            barChart(chartLabels,chartValues);
            break;

        case 'Line Chart':            
            lineChart(chartLabels,chartValues);
            break;

        case 'Table Chart':            
            tableChart(chartLabels,chartValues);
            break;

        default:
            alert('Input not understood, please refresh page and try again');
            //draw();
    }    
}

//Chart functions

//Pie Chart

function pieChart(arr1,arr2){
    let pieStart = 0;
    let pieEnd = 0;
    for(i=0; i<arr2.length; i++){
        pieStart = pieEnd;
        pieEnd += arr2[i];
        
        //appCtx.strokeStyle = 'rgba(' + Math.floor(255-128*i/arr.length) +',' + Math.floor(128*i/arr.length) + ',' + Math.floor(255*i/arr.length) + ',1)';

        appCtx.fillStyle = 'rgba(' + Math.floor(128-128*i/arr2.length) +',' + Math.floor(128*i/arr2.length) + ',' + Math.floor(255*i/arr2.length) + ',1)';

        appCtx.beginPath();
        appCtx.arc(150, 75, 60, pieStart, pieEnd);
        appCtx.lineTo(150,75);
        appCtx.fill();

        appCtx.font = '7px arial';
        appCtx.fillText(arr1[i], 45+40*i,130);    
    };
}

// Normalize function ensures that charts stay within the visible Y-axis

function normalize(num,arr2) {
    return 120*arr2[i]/Math.max.apply(Math,chartValues);
}

//This function draws the X and Y axes on the canvas

function xYAxis() {
    appCtx.beginPath();
    appCtx.moveTo(45,0);
    appCtx.lineTo(45,120);
    appCtx.lineTo(300,120);
    appCtx.strokeStyle = 'black';
    appCtx.stroke();
    appCtx.moveTo(45,0);
}

//Histogram

function histogram(arr1, arr2){   
    xYAxis();
    for(i=0; i<arr2.length; i++){
        
        //appCtx.strokeStyle = 'rgba(' + Math.floor(255-128*i/arr2.length) +',' + Math.floor(128*i/arr2.length) + ',' + Math.floor(255*i/arr2.length) + ',1)';

        appCtx.fillStyle = 'rgba(' + Math.floor(255-128*i/arr2.length) +',' + Math.floor(128*i/arr2.length) + ',' + Math.floor(255*i/arr2.length) + ',1)';        

        appCtx.fillRect(45+40*i,120-normalize(i, arr2),40,normalize(i, arr2));        
        appCtx.font = '7px arial';
        appCtx.fillText(arr1[i], 45+40*i,130);
    };
}

//Bar Chart

function barChart(arr1, arr2){
    xYAxis();
    for(i=0; i<arr2.length; i++){
        appCtx.fillStyle = 'rgba(' + Math.floor(255-128*i/arr2.length) +',' + Math.floor(128*i/arr2.length) + ',' + Math.floor(255*i/arr2.length) + ',1)';   
        appCtx.fillRect(45+40*i,120-normalize(i, arr2),30,normalize(i, arr2));
        appCtx.font = '7px arial';
        appCtx.fillText(arr1[i], 45+40*i,130);
    };
}

//Line Chart

function lineChart(arr1, arr2){
    xYAxis();    
    appCtx.moveTo(45,120-normalize(0, arr2));
    for(i=0; i<arr2.length; i++){        
        appCtx.lineTo(45+40*i,120-normalize(i, arr2));
        appCtx.stroke();
        appCtx.strokeStyle= 'blue';
        appCtx.font = '7px arial';
        appCtx.fillText(arr1[i], 45+40*i,130);
        appCtx.fillText(arr1[i], 45+40*i,120-normalize(i, arr2));
    };
}

//Table of Values


function tableHeading() {
    appCtx.beginPath();
    appCtx.strokeRect(45, 0, 120, 15);

    appCtx.font = '10px arial';
    appCtx.fillText('Data Labels', 65, 10);

    appCtx.strokeRect(165, 0, 120, 15);
    appCtx.fillText('Data Values', 185, 10);

    appCtx.strokeStyle = 'black';       
}


function tableChart(arr1, arr2){
    tableHeading();
    for(i=0; i<arr2.length; i++){
       // appCtx.fillStyle = 'rgba(' + Math.floor(255-128*i/arr2.length) +',' + Math.floor(128*i/arr2.length) + ',' + Math.floor(255*i/arr2.length) + ',1)';   
        appCtx.strokeRect(45,15+15*i,120,15);
        appCtx.strokeRect(165,15+15*i,120,15);
        appCtx.font = '10px arial';
        appCtx.fillText(arr1[i], 65,25+15*i);
        appCtx.fillText(arr2[i], 185,25+15*i);
    };
}
