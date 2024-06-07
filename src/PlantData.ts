import product1 from "./assets/img1.jpg";
import product2 from "./assets/img2.jpg";
import product3 from "./assets/img3.jpg";


interface Plant {
  id: number;
  name: string;
  picture: string;
}


const plantData: Plant[] = [
  {
    id: 1,
    name: "Nail polish",
    picture: product1,
  },
  {
    id: 2,
    name: "plastic flower",
    picture: product2,
  },
  {
    id: 3,
    name: "VR Tools",
    picture: product3,
  },
];

export default plantData;
