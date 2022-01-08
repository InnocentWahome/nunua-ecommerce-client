import React from "react";
import { Menu } from "antd";
import { Link } from "gatsby";

const { SubMenu } = Menu;
const Navbar = () => (
  <Menu
    mode="inline"
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    style={{ height: "100%" }}
  >
    {/* <Menu.Item key="8">Sports, Art & Outdoors</Menu.Item>
    <Menu.Item key="9">Seeking Work</Menu.Item>
    <Menu.Item key="10">Services</Menu.Item>
    <Menu.Item key="11">Jobs</Menu.Item>
    <Menu.Item key="12">Babies & Kids</Menu.Item>
    <Menu.Item key="13">Animals & Pets</Menu.Item>
    <Menu.Item key="14">Agriculture & Food</Menu.Item>
    <Menu.Item key="15">Commercial Equipment & Tools</Menu.Item>
    <Menu.Item key="16">Repair & Construction</Menu.Item> */}
    <Menu.Item key={"/"}>
      <Link to={"/vehicles"}>Vehicles</Link>
    </Menu.Item>

    <Menu.Item key={"/"}>
      <Link to={"/property"}>Property</Link>
    </Menu.Item>

    <Menu.Item key={"/"}>
      <Link to={"/mobilephones"}>Mobile Phones & Tablets</Link>
    </Menu.Item>

    <Menu.Item key={"/"}>
      <Link to={"/electronics"}>Electronics</Link>
    </Menu.Item>

    <Menu.Item key={"/"}>
      <Link to={"/home"}>Home Furniture & Appliances</Link>
    </Menu.Item>
    <Menu.Item key={"/"}>
      <Link to={"/health-beauty"}>Health & Beauty</Link>
    </Menu.Item>
    <Menu.Item key={"/"}>
      <Link to={"/fashion"}>Fashion</Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;
