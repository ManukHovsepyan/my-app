import React, { useState } from 'react';
import AlertDialog from 'components/shared/AlertDialog';
import style from './index.module.scss';
import SquareInput from 'components/shared/SquareInput';
import SquareButton from 'components/shared/SquareButton';
import { AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom';

const WishlistItem = ({ product }: any) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [count, setCount] = useState(0)

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={style.wishlistItemContainer}>
      <div className={style.imageAndTitle}>
        <img src={product.src} alt={product.title} />
        <span>{product.title}</span>
        <button onClick={handleClickOpen}>
          Quick View
        </button>
        <AlertDialog open={openDialog} handleClose={handleCloseDialog}>
					<div className={style.dialogWrapper}>
							<img className={style.dialogImage} src={product.src} />
						<div className={style.dialogInfoContainer}>
							<div>
								<h2 className={style.dialogProductTitle}>{product.title}</h2>
								<p className={style.dialogProductPrice}>
									{product.price}
									<span>֏</span>
								</p>
							</div>
              <div>
								<p>
									{product.description}
								</p>
              </div>
							<div className={style.dialogInfoDescriptionAndCount}>
								<SquareInput onChange={(event: any) => setCount(event.target.value)} value={count} type="number" placeholder="Enter count" />
                <SquareButton>
                  ADD TO CART
                </SquareButton>
							</div>
						</div>
					</div>
        </AlertDialog>
      </div>
    </div>
  );
};

export default WishlistItem;
