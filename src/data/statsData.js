import { FiFileText, FiLayers, FiTrendingUp, FiUsers } from "react-icons/fi";

export const statsData = [
  {
    id: 1,
    label: "Total Posts",
    value: "24",
    change: "+12%",
    icon: FiFileText,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 2,
    label: "Categories",
    value: "6",
    change: "+2",
    icon: FiLayers,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    label: "Total Views",
    value: "12.5K",
    change: "+23%",
    icon: FiTrendingUp,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 4,
    label: "Active Users",
    value: "1.2K",
    change: "+8%",
    icon: FiUsers,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];