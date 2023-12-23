import { Image } from "antd";
import evanoPath from "../assets/images/Ellipse.png";
import { Typography } from "antd";

const EvanoStyle = {
  color: "#000",
  fontFamily: "PoppinsMedium",
  fontSize: 14,
  letterSpacing: 0.14,
};

const PositionStyle = {
  color: "#757575",
  fontFamily: "PoppinsRegular",
  fontSize: 12,
  letterSpacing: 0.12,
};

const Evano = () => {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Image width={42} src={evanoPath} />
      <div>
        <Typography style={EvanoStyle}>Evano</Typography>
        <Typography style={PositionStyle}>Project Manager</Typography>
      </div>
    </div>
  );
};

export default Evano;
