import Container from "./components/Header.jsx";
import { Row, Col } from "antd";
import TableInfo from "./components/Table.jsx";

function App() {
  return (
    <>
      <Container />
      <Row>
        <Col>
          <TableInfo />
        </Col>
      </Row>
    </>
  );
}

export default App;
