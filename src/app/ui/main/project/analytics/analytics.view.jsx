import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const tasks = [
  { id: 1, category: "to-do" },
  { id: 2, category: "completed" },
  { id: 3, category: "to-do" },
  { id: 4, category: "in-progress" },
  { id: 5, category: "to-do" },
  { id: 6, category: "delayed" },
  { id: 7, category: "in-progress" },
  { id: 8, category: "completed" },
  { id: 9, category: "completed" },
  { id: 10, category: "in-progress" },
];

const AnalyticsSection = () => {
  // Count tasks for each category
  const taskCategories = {
    "to-do": 0,
    completed: 0,
    "in-progress": 0,
    delayed: 0,
  };

  tasks.forEach((task) => {
    if (task.category in taskCategories) {
      taskCategories[task.category]++;
    }
  });

  const data = Object.keys(taskCategories).map((category) => ({
    category,
    count: taskCategories[category],
  }));

  return (
    <div className="flex flex-wrap">
      {/* Bar Chart and Pie Chart */}
      <div className="w-full p-4 sm:w-1/2">
        <div className="flex justify-between">
          {/* Bar Chart */}
          <div className="w-1/2">
            <BarChart
              width={200}
              height={250}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </div>

          {/* Pie Chart */}
          <div className="w-1/2">
            <PieChart width={200} height={250}>
              <Pie
                data={data}
                dataKey="count"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full p-4">
        <AreaChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="count" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default AnalyticsSection;
