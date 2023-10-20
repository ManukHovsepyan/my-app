import style from "./index.module.scss";
import HeaderMiddle from "./ui/HeaderMiddle";
import MenuIcon from "./ui/MenuIcon/MenuIcon";
import UserInfo from "./ui/UserInfo/UserInfo";
import en from "assets/images/united-kingdom.png";
import ru from "assets/images/russia.png";
import am from "assets/images/armenia.png";
import IconSelect from "components/shared/IconSelect";
import { useDispatch } from "react-redux";
import { updateLanguage } from "store/appSlice";

interface Props {
  callBack: any
}

const Header = ({
  callBack
}: Props) => {

  const handleMenu = () => {
    if (callBack) callBack();
  };
	const dispatch = useDispatch();
	const flags = [
    {
      lang : "am",
      src : am
    },
    {
      lang : "en",
      src : en
    },
    {
      lang : "ru",
      src : ru
    }

	]
  const handleCallback = (activeItem : Record<string, any>) => {
    dispatch(updateLanguage(activeItem?.lang))
  }

  return (
    <header className={style.header}>
      <MenuIcon callBack={() => handleMenu()} />
      <HeaderMiddle />
      <div className={style.headerInfo}>
        <UserInfo />
        <IconSelect callback={handleCallback} items={flags}/>
      </div>
    </header>
  );
}

export default Header;