import Dropdown from "../Dropdown";

const Category = ({ option } : any) => {
	console.log(option.options)
  return (
		<div>
			<h3>
				{option.category}
				{
					option.children &&
					option.children.map((item:any, index : number) => (
						<Dropdown submenus={item} key={index}/>
					))
				}
			</h3>
		</div>
  );
};

export default Category