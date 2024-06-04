import { Button, Flex, Typography } from "antd";

function ProductList() {
  return (
    <>
      <Flex>
        <Typography.Title level={3} className="primary--color">
          My products
        </Typography.Title>
        <Button type="link" className="gray--color"></Button>
      </Flex>
    </>
  );
}

export default ProductList;
