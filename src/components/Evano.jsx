import { Image } from "antd";
import Typography from "antd/es/typography/Typography";
import evanoPath from "../assets/images/Ellipse.png";

const Evano = () => {
  return (
    <>
      <Image width={42} src={evanoPath} />
      <Typography>Evano</Typography>
      <Typography>Project Manager</Typography>
    </>
  );
};

export default Evano;
