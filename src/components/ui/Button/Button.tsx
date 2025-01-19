import React from 'react'
import styles from './Button.module.scss'

interface Props {
	children: React.ReactNode;
	className?: string;
	typeOfButton?: 'filled' | 'outlined';
}

export const Button: React.FC<Props> = ({  className, children, typeOfButton }) => {
	return (
		<div className={`${styles.button} ${typeOfButton === 'filled' ? styles.filled : styles.outlined} ${className || ''}`}>
			{children}
		</div>
	)
}
