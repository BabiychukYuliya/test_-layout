import MenuSider from "./Menu";
import Dashboard from "./Dashboard";
import Evano from "./Evano";
import React from "react";
import { Layout } from "antd";
import Greeting from "./Greeting";
// import TableInfo from "./Table";
const { Sider } = Layout;

const siderStyle = {
  backgroundColor: "#FFFFFF",
  marginTop: 36,
  marginLeft: 28,
};

const layoutStyle = {
  backgroundColor: "#FFFFFF",
};

const Container = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="306px" style={siderStyle}>
        <Dashboard />
        <MenuSider />
        <Evano />
      </Sider>
      <Layout>
        <Greeting />
        {/* <TableInfo /> */}
      </Layout>
    </Layout>
  );
};

export default Container;
