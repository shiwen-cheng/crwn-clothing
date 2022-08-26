import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      {/* 是可以给 styled-components 传 props 的 */}
      {/* style 需要给一个 js object，外部括号表示内部是 JS，内部括号表示其中是对象 */}
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
