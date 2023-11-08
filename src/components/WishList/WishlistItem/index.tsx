import React, { useState } from 'react';
import AlertDialog from 'components/shared/AlertDialog';
import style from './index.module.scss';
import Button from '@mui/material/Button';
import SquareInput from 'components/shared/SquareInput';

const WishlistItem = ({ product }: any) => {
  const [openDialog, setOpenDialog] = useState(false);

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
							<div className={style.dialogInfoDescriptionAndCount}>
								<p>
									{product.description}
								</p>
								<SquareInput type="number" placeholder="Enter count" />
							</div>
						</div>
					</div>
        </AlertDialog>
      </div>
      {/* Other content */}
    </div>
  );
};

export default WishlistItem;
