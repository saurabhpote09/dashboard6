import React from 'react';
import Card from './Card';

import global from '../assets/icon/global.png';
import uptrend from '../assets/icon/uptrend.png';
import activesites from '../assets/icon/activesites.png';
import availableupdates from '../assets/icon/availableupdates.png';
import siteshealth from '../assets/icon/siteshealth.png';
import add from '../assets/icon/add 1.png';
import edit from '../assets/icon/edit (1) 1.png';
import eye from '../assets/icon/eye 1.png';
import site from '../assets/icon/site-alt 1.png';
import more from '../assets/icon/more.png';
import group from '../assets/icon/Group.png';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const cardData = [
        { icon: global, number: '197', label: 'Total Websites', trendIcon: uptrend, trend: '100%' },
        { icon: activesites, number: '3/197', label: 'Active Sites', trendIcon: uptrend, trend: '1.5%' },
        { icon: availableupdates, number: '23', label: 'Available Updates', trendIcon: uptrend, trend: '11.68%' },
        { icon: siteshealth, number: '07', label: 'Sites Health', trendIcon: uptrend, trend: '3.75%' },
    ];
    const data = [
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    ];

    return (
        <>
            <h1 className='text-lg font-medium mb-3'>Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        number={card.number}
                        label={card.label}
                        trendIcon={card.trendIcon}
                        trend={card.trend}
                    />
                ))}
            </div>

            <div className='mt-4 flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:w-3/5 bg-white shadow-md rounded-lg p-6 border-slate-300 border'>
                    <div className='flex justify-between w-full my-2'>
                        <h1 className='font-medium'>Client</h1>
                        <img src={add} alt="Add" />
                    </div>
                    <h1>Client Information</h1>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead>
                                            <tr className='bg-[#F7F7F8]'>
                                                <th className="px-6 py-3 text-start font-medium text-black">Client Name</th>
                                                <th className="px-6 py-3 text-start font-medium text-black">Email</th>
                                                <th className="px-6 py-3 text-start font-medium text-black">Contact</th>
                                                <th className="px-6 py-3 text-end font-medium text-black">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {["Aditya Das", "Aditya Das", "Aditya Das", "Aditya Das"].map((name, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">aditya.d@diginnovat...</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">+91 75291 64682</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                        <div className='flex justify-between'>
                                                            <img src={site} alt="Site" />
                                                            <img src={eye} alt="View" />
                                                            <img src={edit} alt="Edit" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-2/5 bg-white shadow-md rounded-lg p-6 border-slate-300 border'>
                    <div className='flex justify-between my-2'>
                        <h1 className='font-medium'>Update Overview</h1>
                        <img src={more} alt="More" />
                    </div>
                    <p>Last updated June 20, 2024</p>
                    <div className='flex gap-16 my-3'>
                        <h1 className='font-medium'>Total Updates</h1>
                        <h1 className='font-medium'>250</h1>
                    </div>

                    <div className='flex items-center justify-between bg-[#F7F7F8] p-3'>
                        <h1>Wordpress</h1>
                        <h1>07</h1>
                        <div className='w-1/6 flex justify-between'>
                            <img src={eye} alt="View" />
                            <img src={group} alt="Group" />

                        </div>
                    </div>
                    <div className='flex items-center justify-between bg-[#F7F7F8] p-3'>
                        <h1>Wordpress</h1>
                        <h1>07</h1>
                        <div className='w-1/6 flex justify-between'>
                            <img src={eye} alt="View" />
                            <img src={group} alt="Group" />

                        </div>
                    </div>
                    <div className='flex items-center justify-between bg-[#F7F7F8] p-3'>
                        <h1>Wordpress</h1>
                        <h1>07</h1>
                        <div className='w-1/6 flex justify-between'>
                            <img src={eye} alt="View" />
                            <img src={group} alt="Group" />

                        </div>
                    </div>
                    <div className='flex items-center justify-between bg-[#F7F7F8] p-3'>
                        <h1>Wordpress</h1>
                        <h1>07</h1>
                        <div className='w-1/6 flex justify-between'>
                            <img src={eye} alt="View" />
                            <img src={group} alt="Group" />

                        </div>
                    </div>

                </div>
            </div>

            <div className='mt-4 flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:w-3/5 bg-white shadow-md rounded-lg p-6 border-slate-300 border'>
                    <div className='flex justify-between'>
                        <h1 className='font-medium'>Analytics</h1>
                        <div className='block lg:flex gap-4'>
                            <div className='flex items-center gap-3'>
                                <div className='w-[16px] h-[16px] bg-red-700 rounded-full'></div>
                                <p>Dummy 1</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-[16px] h-[16px] bg-green-700 rounded-full'></div>
                                <p>Dummy 2</p>
                            </div>
                            <select className='border border-black p-2' name="timeframe" id="timeframe">
                                <option value="this_week">This Week</option>
                            </select>
                        </div>
                    </div>
                    <h1 className='my-3'>Analytics Information</h1>
                    <div>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='w-full lg:w-2/5 bg-white shadow-md rounded-lg p-6 border-slate-300 border'>
                    <div className='flex justify-between my-2'>
                        <h1 className='font-medium'>Update Overview</h1>
                        <img src={more} alt="" />
                    </div>
                    <p>Dummy Text</p>
                    <div className='flex justify-center items-center'>
                        <div class="relative size-40">
                            <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="2"></circle>

                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-green-600" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
                            </svg>
                            <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <span class="text-center text-2xl font-bold text-green-600">35%</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[16px] h-[16px] bg-green-700 rounded-full'></div>
                            <p>Responses : 276(69%)</p>
                        </div>
                        <p>Total Sent - 400</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[16px] h-[16px] bg-green-700 rounded-full'></div>
                            <p>Non Responses : 124(31%)</p>
                        </div>
                        <p>Total Sent - 240</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;
