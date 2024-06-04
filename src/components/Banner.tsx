import { Button, Card, Flex, Typography } from "antd";

function Banner() {
  return (
    <Card style={{height: 260, padding: '20px'}}>
      <Flex vertical gap="30px"> 
        <Flex vertical align="flex-start">
          <Typography.Title level={2} >
            Create and Sell products
          </Typography.Title>
          <Typography.Text type="secondary" strong> You can watch and edit whatever you 've created!' </Typography.Text>
        </Flex>

        <Flex gap="large">
          <Button  type="primary" size="large">Explore More</Button>
          <Button  size="large">Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default Banner;
