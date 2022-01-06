import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { Col, Divider, Menu, Row, Typography } from "antd";
import "./style.css";
import SiderMain from "./SiderMain";

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
          <Col span={10}>
            <SiderMain />
          </Col>

          <Col
            span={14}
            style={{
              overflow: "auto",
              height: 450,
              backgroundColor: "#fff",
            }}
          >
            Details
          </Col>
        </Row>
      </Content>
      <Footer>
        <h4 className="footer">Bookmark Manager by TJ</h4>
      </Footer>
    </>
  );
};

export default MainUi;
