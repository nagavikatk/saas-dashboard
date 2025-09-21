import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Mon', 'Current Week': 500, 'Previous Week': 750 },
    { name: 'Tue', 'Current Week': 750, 'Previous Week': 900 },
    { name: 'Wed', 'Current Week': 900, 'Previous Week': 750 },
    { name: 'Thu', 'Current Week': 750, 'Previous Week': 500 },
    { name: 'Fri', 'Current Week': 500, 'Previous Week': 250 },
    { name: 'Sat', 'Current Week': 250, 'Previous Week': 500 },
    { name: 'Sun', 'Current Week': 500, 'Previous Week': 750 },
];

const RevenueChart = () => {
    return (
        <div className="bg-primary-light dark:bg-dark-primary-light p-4 rounded-xl">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">Revenue</h3>
                {/* Custom Legend because recharts legend is hard to style perfectly */}
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-dark"></span>
                        <span className="text-light-text-primary dark:text-dark-text-primary">Current Week: $56,211</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-0.5 bg-gray border-dashed border-2 border-gray"></span>
                         <span className="text-light-text-primary dark:text-dark-text-primary">Previous Week: $68,768</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6C757D' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6C757D' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#212529', border: 'none', borderRadius: '0.5rem' }} labelStyle={{ color: '#FFFFFF' }} />
                    <Line type={"monotone"} dataKey="Current Week" stroke="#A8C5DA" strokeWidth={2} />
                    <Line type="monotone" dataKey="Previous Week" stroke="#1C1C1C" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;
