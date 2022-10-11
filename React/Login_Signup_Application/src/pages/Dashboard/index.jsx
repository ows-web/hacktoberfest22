import React from "react";
import "./Dashboard.css";

const data = [
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    timestapm: "31-08-2022 10:05",
    lattestLocation: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    timestapm: "31-08-2022 10:10",
    lattestLocation: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    timestapm: "31-08-2022 10:15",
    lattestLocation: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    timestapm: "31-08-2022 10:20",
    lattestLocation: "L1",
  },
  {
    deviceId: "D-1567",
    deviceType: "Aircraft",
    timestapm: "31-08-2022 10:25",
    lattestLocation: "L2",
  },

  {
    deviceId: "D-1568",
    deviceType: "Personal",
    timestapm: "31-08-2022 10:05",
    lattestLocation: "L3",
  },
  {
    deviceId: "D-1568",
    deviceType: "Personal",
    timestapm: "31-08-2022 10:10",
    lattestLocation: "L3",
  },
  {
    deviceId: "D-1568",
    deviceType: "Personal",
    timestapm: "31-08-2022 10:15",
    lattestLocation: "L3",
  },
  {
    deviceId: "D-1568",
    deviceType: "Personal",
    timestapm: "31-08-2022 10:20",
    lattestLocation: "L3",
  },
  {
    deviceId: "D-1568",
    deviceType: "Personal",
    timestapm: "31-08-2022 10:25",
    lattestLocation: "L3",
  },
  {
    deviceId: "D-1569",
    deviceType: "Asset",
    timestapm: "31-08-2022 10:15",
    lattestLocation: "L4",
  },
  {
    deviceId: "D-1569",
    deviceType: "Asset",
    timestapm: "31-08-2022 10:20",
    lattestLocation: "L4",
  },
  {
    deviceId: "D-1569",
    deviceType: "Asset",
    timestapm: "31-08-2022 10:25",
    lattestLocation: "L1",
  },
  {
    deviceId: "D-1569",
    deviceType: "Asset",
    timestapm: "31-08-2022 10:30",
    lattestLocation: "L1",
  },
  {
    deviceId: "D-1569",
    deviceType: "Asset",
    timestapm: "31-08-2022 10:35",
    lattestLocation: "L2",
  },
];
const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("session");
  };
  return (
    <div className="home-container">
      <div className="body">
        <div className="heading">
          <h5>GPS Summary</h5>
          <button className="logout gradient" onClick={handleLogout}>
            Log Out{" "}
          </button>
        </div>
        <div className="table-body">
          <table>
            <tr className="row-head">
              <th>DeviceID</th>
              <th>Device Type</th>
              <th>Lattest Timestamp</th>
              <th>Lattest Location</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr className="table-row" key={key}>
                  <td>{val.deviceId}</td>
                  <td>{val.deviceType}</td>
                  <td>{val.timestapm}</td>
                  <td>{val.lattestLocation}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
