import { useSelector } from "react-redux"
import WishlistItem from "../WishlistItem"
import {selectLikedProducts} from "store/productSlice"
// import { useEffect } from "react"

const WishlistItems = () => {
	const likedProducts = useSelector(selectLikedProducts)
	return (
		<div>
			{
				likedProducts.map(product => (
					<WishlistItem product={product} key={product.id}/>
				))
			}
		</div>
	)
}

export default WishlistItems