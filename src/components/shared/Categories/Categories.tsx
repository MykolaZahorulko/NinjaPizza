import React from 'react';
import styles from './Categories.module.scss';

interface Props {
	className?: string;
}

const categories = [
	'Pizza',
	'Combo',
	'Snacks',
	'Cocktails',
	'Coffee',
	'Drinks',
	'Desserts',
	'Desserts',
];

const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
	return (
		<div className={`${styles.categories} ${className ? className : ''}`}>
			{categories.map((category, index) => (
				<a
					className={`${styles.categories__category} ${activeIndex === index ? styles._active : ''}`}
					key={index}
				>
					<div className={styles.categories__category_content}>{category}</div>
				</a>
			))}
		</div>
	);
};
