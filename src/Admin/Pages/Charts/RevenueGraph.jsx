import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "../../../App.css";
// Rename the data variable to avoid conflicts
const chartData = [
  { name: "5k", value: 20, datas: 70003 },
  { name: "10k", value: 40, datas: 70003 },
  { name: "15k", value: 60, datas: 70003 },
  { name: "20k", value: 100, datas: 70003 },
  { name: "25k", value: 80, datas: 70003 },
  { name: "30k", value: 60, datas: 70003 },
  { name: "35k", value: 40, datas: 70003 },
  { name: "40k", value: 30, datas: 70003 },
  { name: "45k", value: 50, datas: 70003 },
  { name: "50k", value: 70, datas: 70003 },
  { name: "55k", value: 60, datas: 70003 },
  { name: "60k", value: 70, datas: 70003 },
];

const RevenueGraph = ({
  borderColor = "#FFA500",
  color = "#FFF3E0",
  width = "100%",
  gradientId = "gradientColor",
  areaChartData,
}) => {
  const [month, setMonth] = useState("October");
  const [year, setYear] = useState("2024");
  const yearlyOptions = [
    "2001",
    "2003",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [chartWidth, setChartWidth] = useState(0);
  const chartContainerRef = React.useRef(null);

  React.useEffect(() => {
    const updateWidth = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="me-1"
      style={{
        position: "relative",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#202224",
            margin: 0, // Remove default margin
          }}
        >
          Revenue Details
        </h3>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Year Dropdown */}
          <select
            className="font-poppins"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
              fontSize: "16px",
              fontWeight: "600",
              color: "#bfcdd6",
              position: "relative",
              zIndex: 2,
            }}
          >
            {yearlyOptions.map((option) => (
              <option key={option} value={option} className="dropdown-item">
                {option}
              </option>
            ))}
          </select>

          {/* Month Dropdown */}
          <select
            className="font-poppins"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
              fontSize: "16px",
              fontWeight: "600",
              color: "#bfcdd6",
              position: "relative",
              zIndex: 2,
            }}
          >
            {monthOptions.map((option) => (
              <option key={option} value={option} className="dropdown-item">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Area Chart */}
      <AreaChart
        width={chartWidth || 300}
        height={Math.min(400, chartWidth * 0.6)}
        data={areaChartData || chartData}
        margin={{ top: 20, right: 40, bottom: 20, left: 0 }}
      >
        {/* Gradient Fill Definition */}
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F9A825" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#FFEB3B" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Grid and Axes */}
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: "#666" }}
          axisLine={{ stroke: "#ccc" }}
        />
        <YAxis
          tickFormatter={(value) => `${value}%`}
          tick={{ fontSize: 12, fill: "#666" }}
          axisLine={{ stroke: "#ccc" }}
        />

        {/* Tooltip */}
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
          formatter={(value, name, props) => {
            const { payload } = props;
            return [payload.datas.toLocaleString(), "Datas"];
          }}
        />

        {/* Area Chart Line */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="#FFA726"
          fill={`url(#${gradientId})`}
          strokeWidth={3}
          dot={{ r: 4, fill: "#013c61", stroke: "#013c61", strokeWidth: 2 }}
          activeDot={{
            r: 6,
            fill: "#013c61",
            stroke: "#013c61",
            strokeWidth: 2,
          }}
        />
      </AreaChart>
    </div>
  );
};

export default RevenueGraph;
