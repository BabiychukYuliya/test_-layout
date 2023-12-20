import MenuSider from "./Menu";
import Dashboard from "./Dashboard";
import React from "react";
import { Layout, Row, Col } from "antd";
import TableInfo from "../components/Table";
const { Footer, Sider } = Layout;

const siderStyle = {
  backgroundColor: "#FFFFFF",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  backgroundColor: "#FFFFFF",
};

const tableStyle = {
  width: "968px",
};
const Container = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="306px" height="1198px" style={siderStyle}>
        <Dashboard />
        <MenuSider />
      </Sider>
      <Layout>
        <Row height="69px">
          <Col>
            <TableInfo style={tableStyle} />
          </Col>
        </Row>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Container;
