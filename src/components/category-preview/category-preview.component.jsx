import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link className="nav-link" to={title}>
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4) // 预览只显示前四个商品
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
