export const chartData = avgSalary => {
  return {
    labels: [
      '신입',
      '1년차',
      '2년차',
      '3년차',
      '4년차',
      '5년차',
      '6년차',
      '7년차',
      '8년차',
      '9년차 이상',
    ],
    datasets: [
      {
        label: '연봉',
        data: avgSalary,
        barThickness: 15,
        backgroundColor: ['rgb(72, 172, 110)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgb(176, 229, 204)'],
      },
    ],
  };
};

export const chartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
