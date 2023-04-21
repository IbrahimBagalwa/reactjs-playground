import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";

const DirectoryItem = ({ title, imageUrl, route }) => {
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
