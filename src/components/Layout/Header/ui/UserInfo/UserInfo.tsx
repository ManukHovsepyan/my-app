import { CiUser, CiShoppingCart } from "react-icons/ci";
import { FcLike } from "react-icons/fc"
import { Link } from "react-router-dom";
const UserInfo = () => {
	return (
		<>
				<Link to="/login">
					<CiUser size={25} />
				</Link>
			<CiShoppingCart size={25} />
			<FcLike size={25} />
		</>
	);
};

export default UserInfo;