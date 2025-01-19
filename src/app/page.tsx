import styles from './page.module.scss';
import { Categories } from '@/components/shared';
import { Title } from '@/components/ui';

const Home = () => {
	return (
		<>
			<div className={styles.controls}>
				<div className={`${styles.controls__container} ${styles.container}`}>
					<Title size="xl" className={styles.controls__title}>All pizzas</Title>
					<Categories />
				</div>
			</div>
		</>
	);
};
export default Home;