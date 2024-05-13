import React from "react";
import {
  StudentLeaderboard,
  CounsellorLeaderboard,
  SchoolChart,
  onboardingStats,
} from "@/utils/dashboardData";
const Home = () => {
  const studentColumn = [
    { Header: "Student_ID", accessor: "Stud_id" },
    { Header: "Score", accessor: "Score" },
  ];
  const counsellorColumn = [
    { Header: "Counsellor ID", accessor: "counselor_id" },
    { Header: "Sr/Jr", accessor: "Sr/jr" },
    { Header: "Exp.Year", accessor: "ExpYear" },
    { Header: "Session/Webiner", accessor: "Session/webiner" },
    { Header: "Rating", accessor: "Rating" },
    { Header: "Location", accessor: "location" },
  ];
  const schoolColumn = [
    { Header: "School Name", accessor: "school_name" },
    { Header: "City", accessor: "city" },
    { Header: "Strength", accessor: "strength" },
    { Header: "Conv%", accessor: "conv%" },
  ];
  return (
    <div className="flex flex-wrap max-h-[calc(100vh-80px)] overflow-auto">
      <Table
        column={studentColumn}
        rows={StudentLeaderboard}
        heading={"STUDENT LEADERBOARD"}
      />
      <Table
        column={counsellorColumn}
        rows={CounsellorLeaderboard}
        heading={"Counsellor Leaderboard"}
      />
      <Table
        column={schoolColumn}
        rows={SchoolChart}
        heading={"School Chart"}
      />
      <div className="font-semibold flex flex-wrap w-[314px] justify-between mx-10 my-2 rounded-lg p-5 shadow-lg">
        <h1 className="py-4 basis-full ">ONBOARDING STATS</h1>
        {Object.keys(onboardingStats).map((key, index) => (
          <div key={index}>
            <h1>{key}</h1>
            <h1 className="py-4 text-3xl">{onboardingStats[key]}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
const Table = ({ column, rows, heading }) => {
  return (
    <div className="mx-10 my-2 rounded-lg p-5 shadow-lg max-w-[calc(100vw-280px)] overflow-auto">
      <h2 className=" font-semibold">{heading}</h2>
      <table className="mt-2 mx-auto w-max border-collapse table-auto  text-sm">
        <tbody>
          <tr className="">
            {column.map((header, index) => (
              <th
                className=" border-b dddark:border-slate-600 font-medium p-4 pt-0 pb-3 dddark:text-slate-200  text-left"
                key={index}
              >
                {header.Header}
              </th>
            ))}
          </tr>
          {rows.map((row, index) => (
            <tr key={index}>
              {column.map((cell, index) => (
                <td
                  className="w-fit border-b border-slate-100 dddark:border-slate-700 px-4 py-1  text-slate-500 dddark:text-slate-400"
                  key={index}
                >
                  {row[cell.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
