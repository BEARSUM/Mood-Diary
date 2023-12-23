import { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";

const Chart = ({ data }) => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const array = Array(5).fill(0);
    data.forEach((it) => {
      array[it.mood - 1] += 1;
    });
    setSeriesData(array);
  }, [data]);

  var options = {
    series: seriesData,
    chart: {
      width: 380,
      type: "pie",
    },
    colors: ["#64c964", "#9dd672", "#fdce15", "#fd8345", "#fd565f"],
    labels: ["아주 좋음", "좋음", "그럭저럭", "나쁨", "매우 나쁨"],
    fill: {
      colors: ["#64c964", "#9dd672", "#fdce15", "#fd8345", "#fd565f"],
    },
    stroke: {
      width: 4,
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#646464"],
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        borderWidth: 0,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <ApexChart
      options={options}
      series={options.series}
      type="pie"
      width="100%"
      height="310"
    />
  );
};

export default Chart;
