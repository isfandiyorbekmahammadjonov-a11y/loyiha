import React from "react";

function StatCard({ icon: Icon, iconBg, iconColor, change, value, label }) {
  return (
    <div className="flex flex-col  bg-white p-6 border-gray-100 shadow-sm rounded-2xl">
      <div className="flex items-center gap-40">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}
        >
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <span className="text-sm font-medium text-green-600">{change}</span>
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
