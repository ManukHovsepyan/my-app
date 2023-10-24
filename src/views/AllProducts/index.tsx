import Product from "components/Product"
import { allProducts } from "utils/constants/allProducts"
import style from "./index.module.scss"
import Container from "components/Layout/Container"
const AllProducts = () => {


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