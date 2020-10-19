import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layouts/layout";

const PoolPage = () => {
  return (
    <Layout>
      <Container className="p-3 mt-5" fluid>
        <Row>
          <Col>Here you can add liquidity</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default React.memo(PoolPage);
