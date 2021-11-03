// const myKey = '9558d3dea32746f29dd558bd98f2d958';
// const Chart = require('chart.js');
// const myChart = new Chart(ctx, {...});

const { GME, MSFT, DIS, BNTX } = mockData;
const stocks = [GME, MSFT, DIS, BNTX];
console.log(stocks)

const timeChartCanvas = document.querySelector('#time-chart');
const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
const averagePriceChartCanvas = document.querySelector('#average-price-chart');
const Chart = document.querySelector('#chart.js')

async function main() {
    // fetch(`https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=${myKey}`);

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    // console.log(stocks)

    stock.array.forEach(stock => stock.values.reverse());
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor:  getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });
    console.log(Chart)
}
    
                                                

main()