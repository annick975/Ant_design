import { Flex, Typography } from "antd";

const SellerLists = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex gap="small" className="top-seller">
        <Flex>
          <Typography.Title>Top Sellers</Typography.Title>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SellerLists;
