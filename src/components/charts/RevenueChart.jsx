import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    // Your chart data...
    { name: 'Jan', 'Current Week': 4000, 'Previous Week': 2400 },
    { name: 'Feb', 'Current Week': 3000, 'Previous Week': 1398 },
    // ... more data
];

const RevenueChart = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-dark">Revenue</h3>
                {/* Custom Legend because recharts legend is hard to style perfectly */}
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-dark"></span>
                        <span className="text-gray">Current Week: $56,211</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-0.5 bg-gray border-dashed border-2 border-gray"></span>
                         <span className="text-gray">Previous Week: $68,768</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6C757D' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6C757D' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#212529', border: 'none', borderRadius: '0.5rem' }} labelStyle={{ color: '#FFFFFF' }} />
                    <Line type="monotone" dataKey="Current Week" stroke="#212529" strokeWidth={2} dot={{ r: 4, fill: '#212529' }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="Previous Week" stroke="#6C757D" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4, fill: '#6C757D' }} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;
