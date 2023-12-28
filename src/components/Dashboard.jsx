import { Typography } from "antd";
import { ReactComponent as SETTING } from "../assets/images/SETTING.svg";

const DashboardStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  backgroundColor: "#FFF",
  marginBottom: 65,
};

const CardStyle = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: 26,
  fontWidth: 600,
  letterSpacing: 0.26,
  padding: 0,
};

const WrapperStyle = {
  display: "flex",
  alignItems: "flex-end",
  gap: 4,
};

const VersionStyle = {
  color: "#838383",

  fontFamily: "Poppins",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: -0.1,
};

const Dashboard = () => {
  return (
    <>
      <div style={DashboardStyle}>
        <div style={WrapperStyle}>
          <SETTING />

          <Typography style={CardStyle}>Dashboard</Typography>
        </div>
        <Typography style={VersionStyle}>v.01</Typography>
      </div>
    </>
  );
};
export default Dashboard;
