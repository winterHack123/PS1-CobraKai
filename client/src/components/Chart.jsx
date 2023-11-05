import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";


const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "3m",
  },
  headers: {
    "X-RapidAPI-Key": "c68c17cd79mshd198e181c6f062cp10bb67jsn70ac71c20d0b",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const Chart = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 1,
          right: 1,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: [
            154444, 149954, 152483, 151160, 154079, 149954, 152483, 154444,
            153832,
          ],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: [
          "28 October",
          "29 October",
          "30 October",
          "31 October",
          "01 November",
          "02 November",
          "03 November",
          "04 November",
          "05 November",
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (document.getElementById("area-chart")) {
      const chart = new ApexCharts(
        document.getElementById("area-chart"),
        options
      );

      chart.render();
    }
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const dropdownOptions = [
    "Yesterday",
    "Today",
    "Last 7 days",
    "Last 30 days",
    "Last 90 days",
  ];

  return (
    <div className="max-w-sm w-full  rounded-lg shadow dark:bg-gray-500 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-white pb-2">
            Ethereum
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            LTP
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          1.74%
          <svg
            className="w-3 h-3 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <div id="area-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <button
            onClick={toggleDropdown}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover-text-gray-900 text-center inline-flex items-center dark-hover-text-white"
            type="button"
          >
            Last 7 days
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
