import React from "react";
import { Menu } from "antd";
import { Link } from "gatsby";
import {
  MessageOutlined,
  MoneyCollectOutlined,
  UserOutlined,
  BellOutlined,
  HomeOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

const Navbar = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    // defaultSelectedKeys={[`${window.location.pathname}`]}
  >
    <Menu.Item key={"/"}>
      <Link to={"/"}>
        <HomeOutlined /> Home
      </Link>
    </Menu.Item>

    <Menu.Item key={"/about"}>
      <Link to={"/about"}>
        <UserSwitchOutlined /> About Us
      </Link>
    </Menu.Item>

    <Menu.Item key={"/notifications"}>
      <Link to={"/notifications"}>
        <BellOutlined /> Notifications
      </Link>
    </Menu.Item>

    <Menu.Item key={"/messages"}>
      <Link to={"/messages"}>
        <MessageOutlined /> Messages
      </Link>
    </Menu.Item>

    <Menu.Item key={"/premium"}>
      <Link to={"/premium"}>
        <MoneyCollectOutlined /> Premium Services
      </Link>
    </Menu.Item>
    <Menu.Item key={"/account"}>
      <Link to={"/account"}>
        {" "}
        <UserOutlined /> Your Account
      </Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;
