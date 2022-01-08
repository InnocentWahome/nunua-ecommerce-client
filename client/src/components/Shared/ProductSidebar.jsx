import React from "react";
import { Menu, Space, Radio } from "antd";
import { Link } from "gatsby";
import { MailOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const Navbar = () => (
  <Menu
    mode="inline"
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    style={{ height: "100%" }}
  >
    <SubMenu key="sub1" icon={<MailOutlined />} title="Price Range">
      <Menu.Item key={"1"}>
        <Radio>1000 - 10,000</Radio>
      </Menu.Item>
      <Menu.Item key={"2"}>
        <Radio>20,000 - 300,000</Radio>
      </Menu.Item>
      <Menu.Item key={"3"}>
        <Radio>30,000-50,000</Radio>
      </Menu.Item>
      <Menu.Item key={"4"}>
        <Radio>50,000-100,000</Radio>
      </Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" icon={<MailOutlined />} title="Categories">
      <Menu.Item key={"5"}>
        <Radio>Accessories</Radio>
      </Menu.Item>
      <Menu.Item key={"6"}>
        <Radio>All</Radio>
      </Menu.Item>
      <Menu.Item key={"7"}>
        <Radio>Men</Radio>
      </Menu.Item>
      <Menu.Item key={"8"}>
        <Radio>Women</Radio>
      </Menu.Item>
      <Menu.Item key={"9"}>
        <Radio>Kids</Radio>
      </Menu.Item>
    </SubMenu>
  </Menu>
);

export default Navbar;
