import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { Col, Divider, Row, Typography } from "antd";
import './style.css'

const MainUi = () => {
  const { Title } = Typography;
  return (
    <>
      <Content>
          <Row className="titleRow">
            <Title>Save It</Title>
          </Row>
          <Divider />
          <Row>
            <Col span={8}>Bookmarks sidebar</Col>
            <Col span={16}>Details</Col>
          </Row>
      </Content>
      <Footer>
        <h4>Bookmark Manager by TJ</h4>
      </Footer>
    </>
  );
};

export default MainUi;
