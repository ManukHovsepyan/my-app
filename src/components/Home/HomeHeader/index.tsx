import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss"
import { useTranslation } from 'react-i18next';
import Container from "components/Layout/Container";

const HomeHeader = () => {
	const { t, i18n } = useTranslation();
	return (
		<div className={style.home}>
		<Container>
			<div className={style.homeTitleContainer}>
				<div>
					<h1 className={style.homeTitle}>{t('app-name')}</h1>
					<SquareButton>Shop now</SquareButton>
				</div>
			</div>
		</Container>
	</div>
	)
}

export default HomeHeader