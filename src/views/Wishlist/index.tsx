import Container from "components/Layout/Container";
import style from "./index.module.scss"
import WishlistItems from "components/WishList/WishlistItems";

const Wishlist = () => {
	return (
		<Container>
			<WishlistItems />
		</Container>
	)
}

export default Wishlist;