import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../Context/Global';
import { dateFormat } from '../Date/Date';

// Registering the necessary components for Chart.js
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Chart = () => {
    const { income, expense } = useGlobalContext();

    // Data for the chart
    const data = {
        labels: income.map((income) => {
            const { date } = income;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: 'Income',
                data: income.map((income) => income.amount),
                backgroundColor: 'green',
                tension: 0.2,
                borderColor: 'green',
                borderWidth: 2, // You can add border for better visibility
            },
            {
                label: 'Expense',
                data: expense.map((expense) => expense.amount),
                backgroundColor: 'red',
                tension: 0.2,
                borderColor: 'red',
                borderWidth: 2,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true, // Makes the chart responsive
        maintainAspectRatio: false, // Allows the chart to resize freely
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='flex justify-center items-center h-full w-full '>
            <div className='border-2 border-solid border-sky-100 bg-[#FCF6F9]  rounded-2xl w-full h-[250px]'> {/* Adjusted height */}
                {/* Line chart with modified width/height */}
                <Line data={data} options={options} width={200} height={150} /> {/* Custom width and height */}
            </div>
        </div>
    );
};

export default Chart;
