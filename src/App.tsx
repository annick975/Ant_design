import { Layout } from "antd";
import { useState } from "react";

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
      ></Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
}
export default App;
