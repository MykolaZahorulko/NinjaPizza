import React from 'react';
import styles from './Title.module.scss';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface Props {
	size?: TitleSize;
	className?: string;
	children: React.ReactNode;
}

export const Title: React.FC<Props> = ({ size = 'md', className, children }) => {
	const mapTagBySize = {
		xs: 'h6',
		sm: 'h5',
		md: 'h4',
		lg: 'h3',
		xl: 'h2',
		xxl: 'h1',
	} as const;

	return React.createElement(
		mapTagBySize[size],
		{
			className: ` ${styles.title} ${styles[`${size}`]} ${className || ''}`,
		},
		children,
	);
};
