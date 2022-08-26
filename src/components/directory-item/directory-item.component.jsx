import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <Link className="directory-item-container" to={`/shop/${title}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* style 需要给一个 js object，外部括号表示内部是 JS，内部括号表示其中是对象 */}
      <div className="body">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
