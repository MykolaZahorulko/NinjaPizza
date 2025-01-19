import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { LogInIcon } from '@/assets/images';
import { BasketIcon } from '@/assets/images';
import { ArrowRight } from '@/assets/images';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={`${styles.header} ${className ? className : ''}`}>
			<div className={`${styles.header__container} ${styles.container}`}>
				<div className={styles.header__content}>
					{/*Left side*/}
					<div className={styles.header__left}>
						<div className={`${styles.header__left_logo} ${styles.img}`}>
							<Image src="/logo.webp" alt="Logo" width={41} height={42}></Image>
						</div>
						<div className={styles.header__left_info}>
							<h1 className={styles.header__left_info_title}>Ninja Pizza</h1>

							<p className={styles.header__left_info_subtitle}>faster than ever</p>
						</div>
					</div>

					{/*	Right side*/}
					<div className={styles.header__right}>
						<div className={styles.header__buttons}>
							<Button className={styles.header__buttons_sign_in} typeOfButton="outlined">
								<div className={`${styles.header__buttons_sign_in_icon} ${styles.img}`}>
									<LogInIcon />
								</div>
								Sign in
							</Button>

							<Button className={styles.header__buttons_basket} typeOfButton="filled">
								<b className={styles.header__buttons_basket_price}>520$</b>
								<span className={styles.header__buttons_basket_separator}></span>
								<div className={styles.header__buttons_basket_amount}>
									<div className={`${styles.header__buttons_basket_amount_icon} ${styles.img}`}>
										<BasketIcon />
									</div>
									<span>3</span>
								</div>
								<div className={`${styles.header__buttons_basket_arrow_icon} ${styles.img}`}>
									<ArrowRight />
								</div>
							</Button>
							
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
