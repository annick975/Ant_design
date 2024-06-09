import { Button, Card, Flex, Image, Typography } from "antd";
import PlantData from "../PlantData.ts";

const { Meta } = Card;
const ProductList = () => {
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
          <Card key={plant.id} hoverable className="plant-card">
            <Image
              src={plant.picture}
              alt={plant.name}
              style={{ width: "130px", height: "170px" }}
            />
            <Meta title={plant.name} style={{ marginTop: "1rem" }} />
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default ProductList;
