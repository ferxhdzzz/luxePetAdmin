import React from 'react';
import { Line } from 'recharts';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
    // Datos de ejemplo para la gráfica
    const data = [
        { name: 'Ene', thisYear: 10, lastYear: 5 },
        { name: 'Feb', thisYear: 18, lastYear: 12 },
        { name: 'Mar', thisYear: 15, lastYear: 10 },
        { name: 'Abr', thisYear: 25, lastYear: 18 },
        { name: 'May', thisYear: 22, lastYear: 20 },
    ];

    return (
        <div className="sales-chart-container">
            <h3 className="sales-title">Ventas totales</h3>
            <div className="chart-legend">
                <div className="legend-item this-year">This year</div>
                <div className="legend-item last-year">Last year</div>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                            dataKey="name" 
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `${value}k`}
                        />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="thisYear"
                            stroke="#4a6cf7"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="lastYear"
                            stroke="#ddd"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart;