import React from "react";

const Dropdown = ({ submenus } : any) => {
	console.log(submenus, "drp")
	const list = submenus.children || [];
  return (
		<div style={{ paddingLeft: "10px" }}>
			{list.map((child: any, index: number) => (
				<React.Fragment key={index}>
					<div style={{ paddingLeft: "10px" }}>
						<span style={{ color: "blue" }}>{child.title}</span>
					</div>
					{child.children && <Dropdown submenus={child} />}
				</React.Fragment>
			))}
		</div>
  );
};

export default Dropdown;