import style from "./index.module.scss"

const PageTitleWithImage = ({title, image}: any) => {
	return (
		<div className={style.pageTitleWrapper}>
			<img src={image} alt="" />
			<h1>{title}</h1>
		</div>
	)
}

export default PageTitleWithImage