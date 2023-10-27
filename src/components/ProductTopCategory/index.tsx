import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss";
import SkeletonLoader from "shared/ui/SkeletonLoader";
import useImageLoaded from "hooks/useImageLoaded";

const ProductTopCategory = ({ category }: any) => {

	const isLoadedImage = useImageLoaded(category?.src);
  
  return (
    <SkeletonLoader height="300px" condition={isLoadedImage} width='calc(33.33% - 10px)' minWidth="300px">
      <div className={style.productTopCategoryContainer}>
          <img 
            className={style.ProductTopCategoryImg} 
            alt="Category"
            src={category.src}
          />
        <div className={style.productTopCategoryTitle}>
          <h1>{category.name}</h1>
          <SquareButton>Shop Now</SquareButton>
        </div>
      </div>
    </SkeletonLoader>
  );
};

export default ProductTopCategory;
