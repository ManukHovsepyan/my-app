import Product from "components/Product"
// import { allProducts } from "utils/constants/allProducts"
import { useSelector } from "react-redux"
import style from "./index.module.scss"
import Container from "components/Layout/Container"
import { RootState } from "store/store"

const AllProducts = () => {

	const allProducts = useSelector((state: RootState) => state.products.products)

	return (
		<Container>
				<h1>Products</h1>
			<div className={style.allProductsWrapper}>
				{
					allProducts.map(product => (
						<Product product={product} key={product.id}/>
					))
				}
			</div>
		</Container>
	)
}

export default AllProducts