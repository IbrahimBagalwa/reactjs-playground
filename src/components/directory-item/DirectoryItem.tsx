import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";
import { FC } from "react";

type DirectoryItemProps = {
  title: string;
  imageUrl: string;
  route: string;
};
const DirectoryItem: FC<DirectoryItemProps> = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();
  const navigateToCategoryHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={navigateToCategoryHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
