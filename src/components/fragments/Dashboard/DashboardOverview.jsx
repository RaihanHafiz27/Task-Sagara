import React from "react";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Students",
      value: "513",
      percentage: "8.5%",
      icon: "images/Icon.svg",
      color: "bg-white",
      textColor: "text-green-600",
    },
    {
      title: "Total Certified Students",
      value: "489",
      percentage: "8.5%",
      icon: "images/Icon2.svg",
      color: "bg-white",
      textColor: "text-green-600",
    },
    {
      title: "Average Certification Score",
      value: "84.62",
      percentage: "8.5%",
      icon: "images/Icon3.svg",
      color: "bg-white",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-3">
      {stats.map((stat, index) => (
        <div key={index} className={`p-4 ${stat.color} rounded-md shadow-md`}>
          <div className="items-center flex-1 gap-5">
            <div>
              <div className="flex justify-between text-lg font-semibold text-gray-500">
                <p>{stat.title}</p>
                <img src={stat.icon} alt="icon" width={40} />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div
                className={`text-sm mt-5 ${stat.textColor} flex gap-2 items-center`}
              >
                <img src="src/assets/ic-trending-up-24px.svg" alt="" />
                <p className="text-lg font-semibold">{stat.percentage}</p>
                <p className="text-lg font-semibold text-black">
                  Up from yesterday
                </p>
              </div>
            </div>
            <div className={`text-4xl ${stat.textColor}`}>
              <span className="material-icons"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
