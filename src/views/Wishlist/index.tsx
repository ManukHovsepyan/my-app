import Container from "components/Layout/Container";
import style from "./index.module.scss"
import WishlistItems from "components/WishList/WishlistItems";
import PageTitleWithImage from "components/shared/PageTitleWithImage";
import wishlistImage from "assets/images/wish.webp"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleWrapperSpace } from "store/appSlice";

const Wishlist = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggleWrapperSpace(false))

		return () => {
			dispatch(toggleWrapperSpace(true));
		};
	}, [])
	return (
		<div>
			<PageTitleWithImage title="Wishlist" image={wishlistImage}/>
			<Container>
				<WishlistItems />
			</Container>
		</div>
	)
}

export default Wishlist;