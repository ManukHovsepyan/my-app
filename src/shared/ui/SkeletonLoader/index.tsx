import React, { HTMLProps } from 'react';

import style from './index.module.scss'

interface Props {
	height?: string,
	condition: boolean,
	classN?: string,
	width?: string,
	minWidth?: string,
}

const SkeletonLoader: React.FC<HTMLProps<HTMLDivElement> & Props> = ({
	condition,
	height = '100px',
	width = '100%',
	minWidth = '',
	classN = '',
	children
}) => {

	const styles = {
		height, 
		minHeight: height,
		width,
		...(minWidth && {minWidth}),
		...(condition && {color: '#fff'})
	}

	if (condition) return <>{children}</>

	return (
		<div className={`${style.SkeletonLoaderStyles} ${(!condition ? style.skeletonAnimation : '')} ${classN}`} style={styles}></div>
	);
};

export default SkeletonLoader;