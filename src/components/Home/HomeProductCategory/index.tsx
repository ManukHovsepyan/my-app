import { HOMEPAGE_CATEGORY as categories } from "utils/constants/homePageCategory"
import style from "./index.module.scss"
import ProductTopCategory from "components/ProductTopCategory"

const HomeProductCategory = () => {
	return (
		<div className={style.ProductTopCategoryContainer}>
			<div className={style.ProductTopCategoryTitle}>
				<h1>
					Top Categories
				</h1>
			</div>
			{
				categories?.map(category => (
					<ProductTopCategory key={category.id} category={category} />
				))
			}
		</div>
	)
}

export default HomeProductCategory