import {DirectoryBodyContainer, DirectoryItemContainer, BackGroundImage} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ title, id , route, imageUrl }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={onNavigateHandler} key={id}>
            <BackGroundImage imageurl={imageUrl} />
            <DirectoryBodyContainer>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </DirectoryBodyContainer>
          </DirectoryItemContainer>
    )
}

export default DirectoryItem;