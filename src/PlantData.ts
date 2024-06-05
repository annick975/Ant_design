import plant1 from "./assets/plant1.jpg";
import plant2 from "./assets/plant2.jpg";
import plant3 from "./assets/plant3.jpg";


interface Plant {
  id: number;
  name: string;
  picture: string;
}


const plantData: Plant[] = [
  {
    id: 1,
    name: "indoor plant",
    picture: plant1,
  },
  {
    id: 2,
    name: "plastic plant",
    picture: plant2,
  },
  {
    id: 3,
    name: "short plants",
    picture: plant3,
  },
];

export default plantData;
