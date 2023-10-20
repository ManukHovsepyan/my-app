	import React, { useState } from "react";

	const Dropdown = ({ submenus }: any) => {
		const list = submenus.children || [];
		return (
			<div style={{ paddingLeft: "10px" }}>
				{
					submenus.title &&
					<span style={{ color: "red" }}>{submenus.title}</span>
				}
				{list.map((child: any, index: number) => (
					<React.Fragment key={index}>
						<div style={{ paddingLeft: "10px" }}>
							<span style={{ color: "blue" }}>{child.title}</span>
						</div>
						{child.children && <Dropdown submenus={child} />} {/* Recursively render child items */}
					</React.Fragment>
				))}
			</div>
		);
	};

	export default Dropdown;
