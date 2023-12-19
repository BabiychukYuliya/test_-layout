import React from "react";
import { Layout, Row, Col } from "antd";
import TableInfo from "../components/Table";
const { Header, Footer, Sider } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  // overflow: "hidden",
  // width: "calc(50% - 8px)",
  // maxWidth: "calc(50% - 8px)",
};

const tableStyle = {
  width: "968px",
};
const Container = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="306px" height="1198px" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
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
