"use-stric"
const inputs = {};
let canvas = document.getElementById("myChart");

const bars = [];
const colors = [];	
const label = [];
let canDraw = false;
start();
function start() {
    getUserInput();
    createDataStructure();
    updateBarsState();  
}
function getUserInput() {

    inputs.barsCount = parseInt(prompt("Type the bars count"));
    inputs.maxItarations = parseInt(prompt("Type the max intarations"));;

}

function updateBarsState() {
    let i = 1;
    const resultUl = document.querySelector("#result");
    const interval = setInterval(()=>{
        const ramdomNumber = getRandomArbitrary(0, inputs.barsCount);
        bars[ramdomNumber] += 1;
        const porcent = (i/inputs.maxItarations*100).toFixed(0) + "%";

        renderDiv(porcent);

        

        if (i == inputs.maxItarations) {
            clearInterval(interval);
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: label,
                    datasets: [{
                        label: 'number of times selected',
                        data: bars,
                        backgroundColor: colors,
                        borderColor: colors,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            
        }


        i++;
    },1)

    function getRandomArbitrary(min, max) {
        return  Math.floor(Math.random() * (max - min) + min);
      }
}

function createDataStructure() {
    const n = 1;
    for (let i = 0; i < inputs.barsCount*n+2; i++) {
        bars[i] = 0;
        colors[i] = "rgb(0, 255, 30)";
        label[i] = i;
    }
    bars[inputs.barsCount*n] = 0
    bars[inputs.barsCount*n+1] = inputs.barsCount/100/n 
}

function renderDiv(text) {
    const div = document.querySelector("#porcent");
    div.textContent = "";
    div.textContent = text;
}

