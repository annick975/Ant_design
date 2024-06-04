import { Button, Layout } from "antd";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";

const { Sider, Header, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={()=> setCollapsed(!collapsed)}
          className="triger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content"></Content>
      </Layout>
    </Layout>
  );
}
export default App;
