export type CallbackSkeletonType = (event?: any) => void

export type ArrayType = Array<Record<string, any>>

export type CallbackSkeletonValue = () => {}

export const getCountryFullName = (country: string) => {
	let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
	return regionNames.of(country) || '';
}