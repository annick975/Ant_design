import React from 'react';
import { Button, Flex, Typography } from "antd";
import PlantData from "../PlantData.ts";

const ProductList: React.FC = () => {
  return (
    <>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} className="primary--color">
          My products
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>

      <Flex align="center" gap="large">
        {PlantData.map((plant) => (
          <div key={plant.id}>
            <Typography.Text>{plant.name}</Typography.Text>
            <img src={plant.picture} alt={plant.name} style={{ width: '100px', height: '100px' }} />
          </div>
        ))}
      </Flex>
    </>
  );
}

export default ProductList;
