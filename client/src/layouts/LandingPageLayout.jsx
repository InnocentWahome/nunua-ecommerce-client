import React from "react";
import { Layout, Breadcrumb } from "antd";

import {Navbar, CustomFooter, Sidebar} from "../components";


const { Header, Content, Footer, Sider } = Layout;
const LandingPageLayout = ({ children }) => {
  return (
    <div>
      <Layout>
        <Header className="header">
          <Navbar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Sidebar />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <CustomFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default LandingPageLayout;
