import { CiUser, CiShoppingCart } from "react-icons/ci";
import { FcLike } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.scss"
import { selectLikedProductCount } from 'store/productSlice';
import { useSelector } from "react-redux";
const UserInfo = () => {
	const navigate = useNavigate()
	const likedProductCount = useSelector(selectLikedProductCount);
	const toWishList = () => {
		navigate("/wishlist")
	}
	return (
		<>
				<Link to="/login">
					<CiUser size={30} />
				</Link>
			<CiShoppingCart size={30} />
			<div 
				className={style.infoWishListContainer} 
				onClick={toWishList}>
				{
					likedProductCount > 0 &&
					<span>
						{likedProductCount}
					</span>
				}
				<FcLike size={30} />
			</div>
		</>
	);
};

export default UserInfo;