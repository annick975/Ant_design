import { Avatar, Button, Flex, Typography, List } from "antd";

const data = [
  {
    name: "Annick UWACU",
    orderTime: 1,
  },
  {
    name: "Annick NIYUBAHWE",
    orderTime: 2,
  },
  {
    name: "Oliviera SILENE",
    orderTime: 3,
  },
  {
    name: "Annick UWACU",
    orderTime: 1,
  },
  {
    name: "Annick UWACU",
    orderTime: 8,
  },
];

function Activity() {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} className="primary--color">
          Recent activity
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <List
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="#">{user.name}</a>}
              description="Ordered new products"
            ></List.Item.Meta>
            <span className="gray--color">
              {user.orderTime}{" "}
              {user.orderTime == 1 ? "day ago" : "days ago"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
}

export default Activity;
