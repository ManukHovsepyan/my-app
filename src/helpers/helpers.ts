export type CallbackSkeletonType = (event?: any) => void

export type ArrayType = Array<Record<string, any>>

export type CallbackSkeletonValue = () => {}

export const getMenuItemByMenuIdElem = (menuList: ArrayType = [], menuId: number | null = null) => {
	for (const item of menuList) {
		if (item.id === menuId) {
			item.isVisible = !item.isVisible;
			return menuList
		}
		if (item.children) {
				const result: any = getMenuItemByMenuIdElem(item.children, menuId);
				if (result) {
					result.isVisible = !item.isVisible;
					return menuList
				}
		}
	}
	return menuList;
};