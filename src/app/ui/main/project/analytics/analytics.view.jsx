


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

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
    <BarChart
      width={500}
      height={300}
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
  );
};

export default AnalyticsSection;
