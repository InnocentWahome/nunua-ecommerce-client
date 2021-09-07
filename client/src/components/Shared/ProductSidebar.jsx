import React from "react";
import { Menu } from "antd";
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
    <SubMenu key="sub1" icon={<MailOutlined />} title="Categories">
      <Menu.Item key={"/"}>
        <Link to={"/vehicles"}>Category 1</Link>
      </Menu.Item>
      <Menu.Item key={"/"}>
        <Link to={"/property"}>Category 2</Link>
      </Menu.Item>
      <Menu.Item key={"/"}>
        <Link to={"/mobilephones"}>Category 3</Link>
      </Menu.Item>
      <Menu.Item key={"/"}>
        <Link to={"/electronics"}>Category 4</Link>
      </Menu.Item>
    </SubMenu>

    {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Prices">
      <Menu.Item key={"/"}>
        <Link to={"/vehicles"}>Min - Max</Link>
      </Menu.Item>

      <Menu.Item key={"/"}>
        <Link to={"/property"}>0-1,000</Link>
      </Menu.Item>

      <Menu.Item key={"/"}>
        <Link to={"/mobilephones"}>1,000-10,000</Link>
      </Menu.Item>

      <Menu.Item key={"/"}>
        <Link to={"/electronics"}>10,000-100,000</Link>
      </Menu.Item>
    </SubMenu>

    <SubMenu key="sub1" icon={<MailOutlined />} title="Rating">
      <Menu.Item key={"/"}>
        <Link to={"/vehicles"}>1</Link>
      </Menu.Item>

      <Menu.Item key={"/"}>
        <Link to={"/property"}>2</Link>
      </Menu.Item>

      <Menu.Item key={"/"}>
        <Link to={"/mobilephones"}>3</Link>
      </Menu.Item>

      <Menu.Item key={"/"}>
        <Link to={"/electronics"}>4</Link>
      </Menu.Item>

      <Menu.Item key={"/"}>
        <Link to={"/electronics"}>5</Link>
      </Menu.Item>
    </SubMenu> */}
  </Menu>
);

export default Navbar;
