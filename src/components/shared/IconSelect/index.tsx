import { useState, useEffect } from "react";
import style from "./index.module.scss";
import { CallbackSkeletonType } from "helpers/helpers";
import { getLanguageFromLocalStorage } from "helpers/localStorageLanguage";

interface Item {
  lang: string;
  src: string;
}

interface Props {
	callback? : CallbackSkeletonType
  items: Item[];
}

const IconSelect = ({ items, callback }: Props) => {
  const localLanguage = getLanguageFromLocalStorage()
  const [active, setActive] = useState<Item>(items[0]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const itemsWithoutActive = items.filter(item => item.lang !== active.lang)
  useEffect(() => {
    if(localLanguage) {
      const defaultLang = items.find(item => item.lang === localLanguage)
      if(defaultLang) setActive(defaultLang)
    } // eslint-disable-next-line
  }, [localLanguage])

  const handleOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  const changeActive = (item: Item) => {
    setActive(item);
    setIsOpenModal(false);
		if(callback) callback(item)
  };

  return (
    <div className={style.selectWrapper}>
      <div className={style.selectHeader} onClick={handleOpen}>
        <img alt="" src={active.src} className={style.activeImage} />
      </div>
      {isOpenModal && (
        <div className={style.selectBody}>
          {itemsWithoutActive.map((item, index) =>
            (
              <img
                alt=""
                key={index}
                src={item.src}
                onClick={() => changeActive(item)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default IconSelect;
