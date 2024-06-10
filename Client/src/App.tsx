import { Button, Layout, Flex } from "antd";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import ToDo from "./pages/ToDo";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

const { Sider, Header, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (<>
    
<BrowserRouter>


    
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
            <Routes>
  {/* <Route path="/" element={}></Route>  This is for dashboard */}
  <Route path="/orders" element={<Orders />}></Route>
  <Route path="/todo" element={<ToDo />}></Route>
  <Route path="/profile" element={<Profile />}></Route>
  <Route path="/settings" element={<Settings />}></Route>
  <Route path="/logout" element={<Logout />}></Route>
</Routes>
          </Content>
        </Layout>
      </Layout>
      </BrowserRouter>
      </>
  );
}
export default App;
