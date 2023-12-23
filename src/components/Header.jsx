import MenuSider from "./Menu";
import Dashboard from "./Dashboard";
import Evano from "./Evano";
import React from "react";
import { Layout, Row, Col } from "antd";
import TableInfo from "../components/Table";
const { Sider } = Layout;

const siderStyle = {
  backgroundColor: "#FFFFFF",
  left: 28,
  top: 36,
};

const layoutStyle = {
  backgroundColor: "#FFFFFF",
};

const tableStyle = {
  width: "100%",
};
const Container = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="306px" height="1198px" style={siderStyle}>
        <Dashboard />
        <MenuSider />
        <div style={{ position: "absolute", bottom: "78px", width: "100%" }}>
          <Evano />
        </div>
      </Sider>
      <Layout>
        <Row height="69px">
          <Col>
            <TableInfo style={tableStyle} />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Container;
