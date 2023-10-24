import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai"


const Product = ({ product }: any) => {
  return (
    <div className={style.productWrapper}>
      <img alt="" src={product.src} />
      <h2>{product.title}</h2>
      <span>{product.description}</span>
			<SquareButton className={style.cartButton}>
				<span className={style.cartButtonText}>
					Cart
				</span>
				<AiOutlineShoppingCart/>
			</SquareButton>
    </div>
  );
};

export default Product;
