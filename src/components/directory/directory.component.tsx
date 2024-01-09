import { Key } from "react";
import { useNavigate } from "react-router-dom";

import DirectoryItem from "../directory-item/directory-item.component";
import Button from "../button/button.component";

import {
  DirectoryContainer,
  DirectoryItemContainer,
  HeaderContainer,
  First,
  Second,
  Third,
  Fourth,
  Fifth,
} from "./directory.styles";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

const Directory = () => {
  const navigate = useNavigate();

  return (
    <DirectoryContainer>
      <HeaderContainer>
        <h3>Encuentre los mejores estilos a los mejores precios.</h3>
        <p>Vestir mejor es vivir mejor.</p>
        <Button onClick={() => navigate("/shop")}>SHOP NOW</Button>
      </HeaderContainer>
      <DirectoryItemContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryItemContainer>
    </DirectoryContainer>
  );
};

export default Directory;
