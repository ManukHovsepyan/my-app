import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss"
import { useTranslation } from 'react-i18next';
import Container from "components/Layout/Container";

const HomeHeader = () => {
	const { t } = useTranslation();
	return (
		<div className={style.home}>
		<Container>
			<div className={style.homeTitleContainer}>
				<div className={style.homeTitleMiddleContainer}>
					<h1 className={style.homeTitle}>{t('app-name')}</h1>
					<SquareButton>{t('shop-now')}</SquareButton>
				</div>
			</div>
		</Container>
	</div>
	)
}

export default HomeHeader