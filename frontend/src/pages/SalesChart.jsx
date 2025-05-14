import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const SalesChart = () => {
  // Datos de ejemplo para el gráfico
  const data = [
    { name: 'En', thisYear: 8000, lastYear: null },
    { name: 'En', thisYear: 10000, lastYear: null },
    { name: 'En', thisYear: 8000, lastYear: null },
    { name: 'En', thisYear: 2000, lastYear: null },
    { name: 'Feb', thisYear: 5000, lastYear: null },
    { name: 'Feb', thisYear: 8000, lastYear: null },
    { name: 'Feb', thisYear: 10000, lastYear: null },
    { name: 'Mar', thisYear: 10000, lastYear: null },
    { name: 'Mar', thisYear: 20000, lastYear: null },
    { name: 'Mar', thisYear: 21000, lastYear: null },
    { name: 'Mar', thisYear: 20000, lastYear: null },
    { name: 'Abr', thisYear: 25000, lastYear: null },
    { name: 'Abr', thisYear: 17000, lastYear: null },
    { name: 'Abr', thisYear: 19000, lastYear: null },
    { name: 'May', thisYear: 14000, lastYear: null },
    { name: 'May', thisYear: 19000, lastYear: null },
    { name: 'May', thisYear: 20000, lastYear: -1000 },
    { name: 'May', thisYear: 20000, lastYear: -2000 }
  ];

  // Datos para la línea punteada (año pasado)
  const lastYearData = [
    { name: 'Abr', lastYear: null },
    { name: 'May', lastYear: 0 },
    { name: 'May', lastYear: -1000 },
    { name: 'May', lastYear: -2000 }
  ];

  // Formatear números en el eje Y (en miles)
  const formatYAxis = (value) => {
    if (value === 0) return '0';
    if (value === 10000) return '10K';
    if (value === 20000) return '20K';
    if (value === 30000) return '30K';
    return value;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-medium text-gray-800">Ventas totales</h2>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-800 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">This year</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Last year</span>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              stroke="#9ca3af"
            />
            <YAxis 
              tickFormatter={formatYAxis} 
              axisLine={false}
              tickLine={false}
              stroke="#9ca3af"
              domain={[0, 30000]}
              ticks={[0, 10000, 20000, 30000]}
            />
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#374151"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#d1d5db"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
              }}
              formatter={(value) => [`${value}`, '']}
              labelFormatter={(label) => `${label}`}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;