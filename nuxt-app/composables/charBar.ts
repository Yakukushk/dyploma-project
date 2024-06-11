// @ts-ignore
import {reactive} from "vue";

export function useChart() {
    const chartData = reactive({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Data Views',
            backgroundColor: ['#4A14BF', '#4A14BF', '#4A14BF'],
            data: [40, 20, 12, 22, 30, 55, 32]
        }]
    });
    const charOptions = reactive({
        responsive: true,
        maintainAspectRatio: false
    });
    return {
        chartData,
        charOptions
    }
}

export function useChartLine() {
    const chartData = reactive({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Data One',
                backgroundColor: '#4A14BF',
                data: [40, 39, 10, 40, 39, 80, 40]
            }
        ]
    });
    const options = reactive({
        responsive: true,
        maintainAspectRatio: false
    });
    return {
        chartData, options
    }
}