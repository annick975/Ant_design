import { Card, Flex, Image, Typography } from "antd";
import plant from "../assets/plant2.jpg";

const ContentSidebar = () => {
  return (
    <>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4}>
            Today <br />5 Orders
          </Typography.Title>
          <Typography.Title level={4}>
            This month <br />
            135 Orders
          </Typography.Title>
        </Flex>
        <Image
          src={plant}
          alt="Ordered Plant"
          style={{
            position: "absolute",
            bottom: -10,
            left: 170,
            height: "200px",
            width: "auto"
          }}
        />
      </Card>
    </>
  );
};

export default ContentSidebar;
