import { Flex, Menu } from "antd";
import { FaOpencart } from "react-icons/fa";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const getDefaultSelectedKey = () => {
    switch (location.pathname) {
      case "/orders":
        return "2";
      case "/todo":
        return "3";
      case "/profile":
        return "4";
      case "/settings":
        return "5";
      case "/logout":
        return "6";
      default:
        return "1";
    }
  };

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaOpencart />
        </div>
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={[getDefaultSelectedKey()]}
        className="menu-bar"
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
           <Link to="/"> DashBoard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CarryOutOutlined />}>
          <Link to="/orders">My Orders</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<OrderedListOutlined />}>
          <Link to="/todo">ToDo</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ProfileOutlined />}>
          <Link to="/profile"> Profile</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <Link to="/settings"> Settings</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<LogoutOutlined />}>
          <Link to="/logout">Logout</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidebar;
