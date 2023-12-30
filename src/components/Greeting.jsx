import { Typography } from "antd";

const greetingStyle = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: 24,
  fontWeight: 500,
};

const Greeting = () => {
  return (
    <>
      <Typography style={greetingStyle}>Hello Evano 👋🏼,</Typography>
    </>
  );
};
export default Greeting;
