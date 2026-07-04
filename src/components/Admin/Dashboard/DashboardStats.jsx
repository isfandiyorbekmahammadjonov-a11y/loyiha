import React from "react";
import StatCard from "./StatCard";
import { statsData } from "../../../data/statsData";

function DashboardStats() {
  return (
    <div className="flex justify-between">
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          icon={stat.icon}
          iconBg={stat.iconBg}
          iconColor={stat.iconColor}
          change={stat.change}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}

export default DashboardStats;
