import { Button, Layout, Flex } from "antd";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import { BrowserRouter as Router} from "react-router-dom";

const { Sider, Header, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
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
            onClick={() => setCollapsed(!collapsed)}
            className="triger-btn"
          />
        </Sider>
        <Layout>
          <Header className="header">
            <CustomHeader />
          </Header>
          <Content className="content">
            <Flex gap="large">
              <MainContent />
              <SideContent />
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
export default App;
