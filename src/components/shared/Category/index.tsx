import { getMenuItemByMenuIdElem } from "helpers/helpers";

const Category = ({ 
	options, 
	level = 0,
	menuItems,
	setMenuItems,
}: any) => {

	const toggleCategory = (event: any, id: number) => {
		event.stopPropagation()
		// const changedMenuList = getMenuItemByMenuIdElem(options, id)
		// console.log(changedMenuList)
		// setMenuItems(changedMenuList)
	}

  return (
    <>
      {menuItems?.map((item: Record<string, any>, index: number) => {
       return (
				<div style={{ 
					marginLeft: `10px`, 
				}}
				onClick={(event) => toggleCategory(event, item.id)} 
				key={item.id}>
					<div style={{display: "flex"}}>
						{level > 0 && item.children?.[0] && <button>(0)</button>}
						<h3>{item.title}</h3>
					</div>
					{item.children && item.isVisible && <Category 
						menuItems={item.children} 
						setMenuItems={setMenuItems} 
						options={options} 
						level={level + 1} 
					/>}
				</div>
			);
      })}
    </>
  );
};

export default Category;