import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss";

const ProductCategory = ({ category }: any) => {
  const containerStyle = {
    backgroundImage: `url(${category.src})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
  };

  return (
    <div className={style.productCategoryContainer} style={containerStyle}>
      <div className={style.productCategoryTitle}>
        <h1>{category.name}</h1>
        <SquareButton>Shop Now</SquareButton>
      </div>
    </div>
  );
};

export default ProductCategory;
