import React from "react";
import { StyledHome } from "./Home.styled";
import "./home.scss";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { useState } from "react";
import images from "./../../Images";

function ProductImage({ id, onExpand }) {
  return (
    <motion.img
      src={images[id]}
      alt=""
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
    />
  );
}

const Home = () => {
  const [productIds, setProductIds] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);
  const [primaryProduct, setPrimaryProduct] = useState(0);

  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  return (
    <StyledHome>
      <div className="container-main">
        <main className="primary-container">
          <AnimatePresence>
            <motion.img
              key={primaryProduct}
              className="primary-product-image"
              src={images[primaryProduct]}
              alt=""
              layoutId={`product-${primaryProduct}`}
            />
          </AnimatePresence>
        </main>
        <aside className="product-gallery">
          <AnimatePresence>
            {productIds.map((id) => (
              <ProductImage id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </aside>
      </div>
    </StyledHome>
  );
};

export default Home;
