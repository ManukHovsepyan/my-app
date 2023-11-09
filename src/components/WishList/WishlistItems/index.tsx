import { useSelector } from "react-redux";
import WishlistItem from "../WishlistItem";
import { selectLikedProducts } from "store/productSlice";
import style from "./index.module.scss";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";

const WishlistItems = () => {
    const likedProducts = useSelector(selectLikedProducts);
    const itemsPerPage = 2;
    const totalProducts = likedProducts.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
    };

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = likedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className={style.wishlistContainer}>
            {totalProducts > 0 ? (
                currentProducts.map(product => (
                    <WishlistItem product={product} key={product.id} />
                ))
            ) : (
                <div className={style.noWishlistItems}>
                    <div>
                        <span>You have no favorite products</span>
                    </div>
                </div>
            )}

            {totalPages > 1 && (
                <div className={style.paginationContainer}>
                    <Stack spacing={2} justifyContent="center" className={style.pagination}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="secondary"
                        />
                    </Stack>
                </div>
            )}
        </div>
    );
};

export default WishlistItems;
