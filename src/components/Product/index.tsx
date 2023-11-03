import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss";
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { toggleLike } from "store/productSlice";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Product = ({ product }: any) => {
  const dispatch = useDispatch()
  const handleLike = (id : number) => {
    dispatch(toggleLike(id))
  }
  const [value, setValue] = React.useState<number | null>(2);
  const ratingChanged = (newRating : any) => {
    // console.log(newRating);
  };

  return (
    <div className={style.productWrapper}>
      <div className={style.productTagTitle}>
        <span>
          New
        </span>
      </div>
        <div>
          <img alt="" src={product.src} />
          <div className={style.productInfoTitle}>
            <p className={style.productTitle}>{product.title}</p>
            <span>{product.description}</span>
            <p className={style.productPriceContainer}>
              <span>3000</span>
              <span> ֏</span>
              {/* <span> ₽</span>
              <span> $</span> */}
            </p>
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="no-value"
        value={value}
        onChange={(event, newValue) => {
          // console.log(newValue, "423423423")
        }}
      />
    </Box>
          </div>
        </div>
        <div className={style.productInfoButtons}>
          <SquareButton onClick={() => handleLike(product.id)}>
            {
              product.isLike ? (
                <AiFillHeart />
                ) : (
                <AiOutlineHeart />
              )
            }
          </SquareButton>
          <SquareButton className={style.cartButton}>
            <span className={style.cartButtonText}>
              Cart
            </span>
            <AiOutlineShoppingCart/>
          </SquareButton>
        </div>
    </div>
  );
};

export default Product;
