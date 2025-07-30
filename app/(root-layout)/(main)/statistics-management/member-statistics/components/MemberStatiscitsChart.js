"use client"
import React, { useState} from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import {CircleSmall} from "lucide-react";

function MemberStatiscitsChart({members}) {
    const [selectedKey, setSelectedKey] = useState('totalMembers');
    const sampleData = [
        {
            date: '2025-02-17',
            dateMonth: '02/17',
            totalMembers: 200,
            generalMembers: 45,
            AdminMembers: 789,
            withdrawMember: 345
        },
        {
            date: '2025-02-18',
            dateMonth: '02/18',
            totalMembers: 435,
            generalMembers: 567,
            AdminMembers: 900,
            withdrawMember: 123
        },
        {
            date: '2025-02-19',
            dateMonth: '02/19',
            totalMembers: 45,
            generalMembers: 57,
            AdminMembers: 90,
            withdrawMember: 13
        },
        {
            date: '2025-02-20',
            dateMonth: '02/20',
            totalMembers: 123,
            generalMembers: 23,
            AdminMembers: 76,
            withdrawMember: 56
        },
        {
            date: '2025-02-21',
            dateMonth: '02/21',
            totalMembers: 67,
            generalMembers: 23,
            AdminMembers: 55,
            withdrawMember: 23
        },
        {
            date: '2025-02-22',
            dateMonth: '02/22',
            totalMembers: 434,
            generalMembers: 234,
            AdminMembers: 786,
            withdrawMember: 456
        },
        {
            date: '2025-02-23',
            dateMonth: '02/23',
            totalMembers: 678,
            generalMembers: 435,
            AdminMembers: 344,
            withdrawMember: 565
        }
    ];

    const chartOptions = [
        { key: 'totalMembers', label: '전체', color:"#E5EAFF", status: false },
        { key: 'generalMembers', label: '일반회원' , color:"#E5EAFF", status: true},
        { key: 'AdminMembers', label: '운영자', color:"#C1CDFF", status: true },
        { key: 'withdrawMember', label: '최고관리자', color:"#90A5FF", status: true }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        return ( <div>
                {payload.map((entry) => (
                    <div key={entry.dataKey}  className={"rounded-full h-[24px] border text-13 border-themeColor px-3 flex items-center justify-center gap-2 bg-white items-center justify-between text-[#4D4D4D] shadow-[0_0_5.6px_0_rgba(48,88,255,0.7)]"}>
                        <span> { chartOptions.find((o) => o.key === entry.dataKey) ?.label || entry.dataKey } </span>
                        <span>| </span>
                        <span> {entry.value}</span>
                    </div>
                ))}

            </div>
        )
    }


    return (
        <div className={"flex flex-col p-6 gap-4 shadow-[0_2px_4px_rgba(0,0,0,0.06)]"}>

            <div style={{ width: '100%', height: 250 }}>
                <div style={{ width: '100%'}}>
                    <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={members}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4a90e2" stopOpacity={0.5} />
                                        <stop offset="95%" stopColor="#4a90e2" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false}
                                               strokeWidth={1}
                                               stroke="#EEEEEE" />
                                <XAxis dataKey="dateMonth" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false}
                                       tickFormatter={(value) =>
                                           `${value}명`
                                       }
                                       tickLine={false} />
                                <Tooltip cursor={false} content={<CustomTooltip />} />
                                <Area
                                    type="monotone"
                                    dataKey={selectedKey}
                                    stroke="#246BEB"
                                    strokeWidth={4}
                                    fill="url(#colorArea)"
                                    fillOpacity={1}
                                    activeDot={{ r: 10, stroke: '#fff', strokeWidth: 4, fill: '#3058FF' }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </div>

            <div className={"flex w-full justify-center"}>
                <ul  className={'flex w-max gap-6 text-textSubColor text-base cursor-pointer'}>
                    {chartOptions.filter(option => option.status).map(option => (
                        <li
                            onClick={() => setSelectedKey(option.key)}
                            key={"option" + option.key}
                            className={"flex items-center"}
                        >
                            <span><CircleSmall size={24} fill={option.color} color={option.color} /></span>
                            <span className={`text-[#64748B] text-sm`}>{option.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MemberStatiscitsChart;