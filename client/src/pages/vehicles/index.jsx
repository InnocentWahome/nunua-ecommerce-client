import * as React from "react";
import { ProductPageLayout } from "../../layouts";
import { Card, Tag, Typography, Divider, Row, Col, Image } from "antd";
import {
  DashboardTwoTone,
  CalendarTwoTone,
  SettingTwoTone,
  FireTwoTone,
} from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const IndexPage = () => (
  <ProductPageLayout>
    <Card hoverable={true}>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify={"space-around"}
        align={"middle"}
      >
        <Col xs={24} sm={24} md={8} lg={8}>
          <Image src="../assets/images/logo.png" alt="product image" />
        </Col>

        <Col xs={24} sm={24} md={16} lg={16}>
          <Tag color={"blue"}>Tag 1</Tag>
          <Tag>Tag 1</Tag>
          <Paragraph>Product Name</Paragraph>

          <Title>Ksh. 10,000</Title>

          <Divider />

          <Row justify={"space-around"} align={"middle"}>
            <Col>
              <Paragraph>
                <CalendarTwoTone /> 2018
              </Paragraph>
            </Col>

            <Col>
              <Paragraph>
                <SettingTwoTone /> Manual
              </Paragraph>
            </Col>

            <Col>
              <Paragraph>
                <DashboardTwoTone /> 39,000km
              </Paragraph>
            </Col>

            <Col>
              <Paragraph>
                <FireTwoTone /> Petrol
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  </ProductPageLayout>
);

export default IndexPage;
