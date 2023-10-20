import { CallbackSkeletonType } from "../helpers/helpers";

export const debounce = (fn: CallbackSkeletonType, wait = 300) => {
	let timer: any;
	return function(...args: any) {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => fn(...args), wait);
	};
};