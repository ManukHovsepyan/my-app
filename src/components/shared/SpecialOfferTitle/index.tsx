import style from "./index.module.scss"

const SpecialOffer = ({ img }: any) => {
  const divStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div style={divStyle} className={style.specialOfferWrapper}>
			<h1>
				Special Offers 2023
			</h1>
    </div>
  );
};

export default SpecialOffer