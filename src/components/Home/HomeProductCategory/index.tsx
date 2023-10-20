import ProductCategory from "components/ProductCategory"
import { HOMEPAGE_CATEGORY as categories } from "utils/constants/homePageCategory"
import style from "./index.module.scss"

const HomeProductCategory = () => {
	return (
		<div className={style.ProductCategoryContainer}>
			{
				categories?.map(category => (
					<ProductCategory key={category.id} category={category} />
				))
			}
		</div>
	)
}

export default HomeProductCategory