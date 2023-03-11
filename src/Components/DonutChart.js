import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ chartInfo, firstColor, secondColor }) => {


  if (chartInfo) {
    let labels = Object.keys(chartInfo);

    const data = {
      labels,
      datasets: [
        {
          label: 'Cantidad de respuestas',
          data: labels.map((item) => chartInfo[item]),
          backgroundColor: [
            '#2c52b2',
            '#f8aa14',
            '#9d3030',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)',
          ],
          borderWidth: 0,
          hoverOffset: 15
        },
      ],
    };


 
     // customDatalabels plugin block
     const customDatalabels = {
      id: 'customDatalabels',
      afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data, chartArea: { top, bottom, left, right, width, height } } = chart;
        ctx.save();
        data.datasets[0].data.forEach((datapoint, index) => {
          const { x, y } = chart.getDatasetMeta(0).data[index].tooltipPosition()
          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = data.datasets[0].borderColor[index];
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(datapoint, x, y);
        })
      }
    }

    const options = {
      
        legend: {
          display: false
        },
        layout: {
          padding: 15
        
        },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const datapoints = ctx.chart.data.datasets[0].data
             const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
            const percentage = value / total * 100
            return percentage.toFixed(0) + "%";
          },
          display: true,
          color: "white"
        }
      }
      
    }


    return <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />;
  } else {
    return (<>
      <div><h1>404</h1></div>
    </>)
  }
}

export default DonutChart;