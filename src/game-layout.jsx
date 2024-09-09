import { Field, Information } from './components';
import styles from './game.module.css';
export const GameLayout = ({onRestartGame}) => (
	<div className={styles.game}>
		<Information/>
		<Field/>
		<button onClick={onRestartGame}>Начать заново</button>
	</div>

)