import { CiUser, CiShoppingCart } from "react-icons/ci";
import { FcLike } from "react-icons/fc"
const UserInfo = () => {
	return (
		<>
			<CiUser size={25}/>
			<CiShoppingCart size={25} />
			<FcLike size={25} />
		</>
	);
};

export default UserInfo;