import React from 'react';

const Card = ({ icon, number, label, trendIcon, trend }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 border-slate-300 border">
            <div className="flex items-center justify-center bg-gray-100 rounded-full h-12 w-12">
                <img src={icon} alt={label} aria-label={label} />
            </div>
            <div className="text-center md:text-left">
                <div className="text-2xl font-bold">{number}</div>
                <div className="text-gray-500">{label}</div>
            </div>
            <div className="flex items-center text-green-500 space-x-1">
                <img src={trendIcon} alt="Trend" aria-label="Trend Icon" />
                <span>{trend}</span>
            </div>
        </div>
    );
};

export default Card;
