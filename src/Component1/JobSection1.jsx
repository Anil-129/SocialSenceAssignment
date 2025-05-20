import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
];

const COLORS = ["#F97316", "#FB923C", "#FDBA74", "#FED7AA", "#FFF7ED"];

const cardValues = {
  1: "$43,630",
  2: "$27,064",
  3: "$1,658",
  4: "-$4,543.0",
  5: "0.73%",
};

const JobSection = ({ title, id }) => {
  return (
    <section className="mb-8 p-4 border rounded-md shadow-sm bg-white max-w-md mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {id === 4 ? "Analytics" : title}
        </h2>
        {id === 1 && (
          <button className="text-sm bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-md">
            This Month ▼
          </button>
        )}
        {id === 4 && (
          <div className="flex gap-2">
            <button className="text-sm bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-md">
              This Year
            </button>
            <button className="text-sm bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-md">
              ▼
            </button>
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <p className="text-xl font-bold text-gray-700">
            {cardValues[id] || "$0"}
          </p>
        </div>

        {[2, 3, 4, 5].includes(id) && (
          <div className="h-32 rounded-lg overflow-hidden shadow-md">
            <ResponsiveContainer width="100%" height="100%">
              {id === 2 ? (
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#F97316" />
                </BarChart>
              ) : id === 3 ? (
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    innerRadius={30}
                    fill="#F97316"
                    paddingAngle={5}
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              ) : id === 4 ? (
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#F97316" />
                </BarChart>
              ) : id === 5 ? (
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    cx="50%"
                    cy="100%"
                    startAngle={180}
                    endAngle={0}
                    outerRadius={80}
                    fill="#F97316"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              ) : null}
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {id === 1 && (
        <div className="flex gap-4 mt-6">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md shadow">
            Cosmetics
          </button>
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md shadow">
            Housewest
          </button>
        </div>
      )}
    </section>
  );
};

export default JobSection;
